import { prisma } from "../../shared/prisma";
import { IUserPayload } from "../../type/index.type";
import { v4 as uuidv4 } from 'uuid';

const createAppointment = async (user: IUserPayload, payload: { doctorId: string, scheduleId: string }) => {

    const patientData = await prisma.patient.findFirstOrThrow({
        where: { email: user.email }
    })

    const doctorData = await prisma.doctor.findUniqueOrThrow({
        where: { id: payload.doctorId }
    })

    const checkIsBooked = await prisma.doctorSchedule.findFirstOrThrow({
        where: {
            doctorId: payload.doctorId,
            scheduleId: payload.scheduleId,
            isBooked: false
        }
    })

    const consultationId = uuidv4()

    const result = await prisma.$transaction(async (tnx) => {
        const appointmentData = await tnx.appointment.create({
            data: {
                patientId: patientData.id,
                doctorId: doctorData.id,
                scheduleId: payload.scheduleId,
                consultationId
            }
        })

        await tnx.doctorSchedule.update({
            where: {
                scheduleId_doctorId: {
                    doctorId: doctorData.id,
                    scheduleId: payload.scheduleId
                }
            },
            data: { isBooked: true }
        })

        const transactionId = uuidv4();

        await tnx.payment.create({
            data: {
                appointmentId: appointmentData.id,
                ammount: doctorData.appointmentFee,
                transactionId
            }
        })

        return appointmentData;
    })

}


export const AppointmentService = {
    createAppointment
}