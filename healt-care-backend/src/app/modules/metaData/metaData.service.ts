import { PaymentStatus, UserRole } from "@prisma/client";
import { IUserPayload } from "../../type/index.type"
import ApiError from "../../helper/ApiError";
import httpStatus from "http-status";
import { prisma } from "../../shared/prisma";

const fetchDashboardMetaData = async (user: IUserPayload) => {
    let metaData;
    switch (user.role) {
        case UserRole.ADMIN:
            // metaData = await 
            console.log("admin login")
            break;
        case UserRole.DOCTOR:
            metaData = await getDoctorMetaData(user);
            console.log("doctor login")
            break;
        case UserRole.PATIENT:
            console.log("patient login")
            // metaData = await 
            break;

        default:
            throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized to access this route");
    }
    return metaData;
}

const getDoctorMetaData = async (user: IUserPayload) => {
    const doctorData = await prisma.doctor.findFirstOrThrow({
        where: {
            email: user.email,
            isDeleted: false
        }
    })

    const appointmentCount = await prisma.appointment.count({
        where: {
            doctorId: doctorData?.id
        }
    })

    const patientCount = await prisma.appointment.groupBy({
        by: ['patientId'],
        _count: { id: true }
    })

    const reviewCount = await prisma.review.count({
        where: {
            doctorId: doctorData?.id
        }
    })

    const totalRevenue = await prisma.payment.aggregate({
        _sum: {
            ammount: true
        },
        where: {
            appointment: { doctorId: doctorData?.id },
            paymentStatus: PaymentStatus.PAID
        }
    })

    const appointmentStatusDistribution = await prisma.appointment.groupBy({
        by: ['appointmentStatus'],
        _count: { id: true },
        where: {
            doctorId: doctorData?.id
        }
    })

    const formattedAppointmentStatusDistribution = appointmentStatusDistribution.map(({ appointmentStatus, _count }) => ({
        appointmentStatus,
        count: Number(_count.id)
    }))

    return {
        appointmentCount,
        patientCount: patientCount.length,
        reviewCount,
        totalRevenue,
        formattedAppointmentStatusDistribution
    }
}


export const MetaDataService = {
    fetchDashboardMetaData
}