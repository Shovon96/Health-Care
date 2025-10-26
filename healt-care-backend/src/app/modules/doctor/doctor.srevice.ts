import { Doctor, Prisma } from "@prisma/client"
import ApiError from "../../helper/ApiError"
import { IOptions, paginationHelper } from "../../helper/paginationHelper"
import { prisma } from "../../shared/prisma"
import { IUserPayload } from "../../type/index.type"
import httpStatus from "http-status"

const createDoctorSchedule = async (user: IUserPayload, payload: { scheduleIds: string[] }) => {
    const doctorData = await prisma.doctor.findUniqueOrThrow({
        where: { email: user.email }
    })

    if (!doctorData?.id) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Only doctors can create schedules!")
    }

    const doctorScheduleData = payload.scheduleIds.map(scheduleId => ({
        doctorId: doctorData.id,
        scheduleId
    }))

    return await prisma.doctorSchedule.createMany({
        data: doctorScheduleData
    })

}


const getAllDoctors = async (options: IOptions, filters: any) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper.paginate(options)
    const { searchTerm, ...filterData } = filters

    const doctorSearchableFields = ['email', 'name', 'contactNumber']
    const andConditions: Prisma.DoctorWhereInput[] = []

    if (searchTerm) {
        andConditions.push({
            OR: doctorSearchableFields.map((field) => ({
                [field]: { contains: searchTerm, mode: 'insensitive' }
            }))
        })
    }

    if (Object.keys(filterData).length > 0) {
        const filterConditions = Object.keys(filterData).map((key) => ({
            [key]: { equals: filterData[key] }
        }))
        andConditions.push(...filterConditions)
    }

    const whereConditions: Prisma.DoctorWhereInput = andConditions.length > 0 ? { AND: andConditions } : {}

    const result = await prisma.doctor.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder
        }
    })

    const total = await prisma.doctor.count({ where: whereConditions })

    return {
        meta: {
            total,
            page,
            limit
        },
        data: result
    }

}


const updateDoctorInfo = async (doctorId: string, payload: Partial<Doctor>) => {
    const doctorInfo = await prisma.doctor.findFirstOrThrow({
        where: { id: doctorId }
    })

    const updateData = await prisma.doctor.update({
        where: { id: doctorInfo.id },
        data: payload
    })

    return updateData
}

export const DoctorService = {
    createDoctorSchedule,
    getAllDoctors,
    updateDoctorInfo
};