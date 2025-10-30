import { AppointmentStatus, PaymentStatus, Prescription, UserRole } from "@prisma/client";
import { IUserPayload } from "../../type/index.type";
import { prisma } from "../../shared/prisma";
import ApiError from "../../helper/ApiError";
import httpStatus from "http-status";

const createPrescription = async (user: IUserPayload, payload: Partial<Prescription>) => {
    const appointmentData = await prisma.appointment.findUniqueOrThrow({
        where: {
            id: payload.appointmentId,
            appointmentStatus: AppointmentStatus.COMPLETED,
            paymentStatus: PaymentStatus.PAID
        },
        include: {
            doctor: true
        }
    })

    if (user.role === UserRole.DOCTOR) {
        if (!(user.email === appointmentData.doctor.email)) {
            throw new ApiError(httpStatus.BAD_REQUEST, "You are not valid user!")
        }
    }

    const result = await prisma.prescription.create({
        data: {
            appointmentId: appointmentData.id,
            doctorId: appointmentData.doctorId,
            patientId: appointmentData.patientId,
            instruction: payload.instruction as string,
            followUpDate: payload.followUpDate || null
        },
        include: {
            patient: true
        }
    })

    return result;

}

export const PrescriptionService = {
    createPrescription
}