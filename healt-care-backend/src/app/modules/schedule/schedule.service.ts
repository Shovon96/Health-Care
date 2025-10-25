import { addHours, addMinutes, format } from "date-fns";
import { prisma } from "../../shared/prisma";
import { IOptions, paginationHelper } from "../../helper/paginationHelper";
import { Prisma } from "@prisma/client";
import { IUserPayload } from "../../type/index.type";
import ApiError from "../../helper/ApiError";
import httpStatus from "http-status"

const createSchedule = async (payload: any) => {
    const { startTime, endTime, startDate, endDate } = payload;
    const intervalTime = 30;

    const currentDate = new Date(startDate);
    const lastDate = new Date(endDate);
    const schedules = []

    // Generate time slots
    while (currentDate <= lastDate) {
        const startDateTime = new Date(
            addMinutes(
                addHours(
                    `${format(currentDate, 'yyyy-MM-dd')}`,
                    Number(startTime.split(':')[0])
                ),
                Number(startTime.split(':')[1])
            )
        )

        const endDateTime = new Date(
            addMinutes(
                addHours(
                    `${format(currentDate, 'yyyy-MM-dd')}`,
                    Number(endTime.split(':')[0])
                ),
                Number(endTime.split(':')[1])
            )
        )

        // Create slots between startDateTime and endDateTime
        while (startDateTime < endDateTime) {
            const slotStartDateTime = startDateTime
            const slotEndDateTime = addMinutes(startDateTime, intervalTime)

            const scheduleData = {
                startDateTime: slotStartDateTime,
                endDateTime: slotEndDateTime
            }

            // Save scheduleData to database
            const isExistingSchedule = await prisma.schedule.findFirst({
                where: scheduleData
            })

            if (!isExistingSchedule) {
                const result = await prisma.schedule.create({
                    data: scheduleData
                })
                schedules.push(result);
            }

            slotStartDateTime.setMinutes(slotStartDateTime.getMinutes() + intervalTime)
        }
        currentDate.setDate(currentDate.getDate() + 1)
    }

    return schedules;
}


const getAllSchedules = async (user: IUserPayload, options: IOptions, filters: any) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper.paginate(options)
    const { startDateTime: filterStartDateTime, endDateTime: filterEndDateTime } = filters;
    const andCondition: Prisma.ScheduleWhereInput[] = [];

    if (filterStartDateTime && filterEndDateTime) {
        andCondition.push({
            AND: [
                {
                    startDateTime: { gte: filterStartDateTime }
                },
                {
                    endDateTime: { lte: filterEndDateTime }
                }
            ]
        })
    }

    const whereCondition: Prisma.ScheduleWhereInput = andCondition.length > 0 ? {
        AND: andCondition
    } : {}


    // remove the already doctor appointed schedules
    const doctorSchedules = await prisma.doctorSchedule.findMany({
        where: {
            doctor: {
                email: user.email
            }
        },
        select: {
            scheduleId: true
        }
    })

    const doctorScheduleIds = doctorSchedules.map(schedule => schedule.scheduleId);

    const result = await prisma.schedule.findMany({
        where: {
            ...whereCondition,
            id: { notIn: doctorScheduleIds }
        },
        skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder
        }
    })
    const total = await prisma.schedule.count({
        where: {
            ...whereCondition,
            id: { notIn: doctorScheduleIds }
        }
    });

    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    }
}

const deleteSchedule = async (scheduleId: string) => {
    const findSchedule = await prisma.schedule.findUnique({ where: { id: scheduleId } })
    if (!findSchedule) {
        throw new ApiError(httpStatus.NOT_FOUND, "No schedule found!")
    }
    return await prisma.schedule.delete({
        where: { id: scheduleId }
    })
}


export const ScheduleService = {
    createSchedule,
    getAllSchedules,
    deleteSchedule
};