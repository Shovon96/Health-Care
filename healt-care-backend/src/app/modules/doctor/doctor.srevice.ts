import { prisma } from "../../shared/prisma"
import { IUserPayload } from "../../type/index.type"


const createDoctorSchedule = async (user: IUserPayload, payload: { scheduleIds: string[] }) => {
    const doctorData = await prisma.doctor.findUniqueOrThrow({
        where: { email: user.email }
    })

    if (!doctorData?.id) {
        throw new Error("Only doctors can create schedules!")
    }

    const doctorScheduleData = payload.scheduleIds.map(scheduleId => ({
        doctorId: doctorData.id,
        scheduleId
    }))

    return await prisma.doctorSchedule.createMany({
        data: doctorScheduleData
    })

}


export const DoctorService = {
    createDoctorSchedule
};