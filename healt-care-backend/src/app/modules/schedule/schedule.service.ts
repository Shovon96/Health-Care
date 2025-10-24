import { addHours, addMinutes, format } from "date-fns";
import { prisma } from "../../shared/prisma";

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


export const ScheduleService = {
    createSchedule
};