import { PaymentStatus, UserRole } from "@prisma/client";
import { IUserPayload } from "../../type/index.type"
import ApiError from "../../helper/ApiError";
import httpStatus from "http-status";
import { prisma } from "../../shared/prisma";

const fetchDashboardMetaData = async (user: IUserPayload) => {
    let metaData;
    switch (user.role) {
        case UserRole.ADMIN:
            metaData = await getAdminMetaData()
            break;
        case UserRole.DOCTOR:
            metaData = await getDoctorMetaData(user);
            break;
        case UserRole.PATIENT:
            metaData = await getPatientMetaData(user);
            break;

        default:
            throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized to access this route");
    }
    return metaData;
}

const getAdminMetaData = async () => {
    const patientCount = await prisma.patient.count();
    const doctorCount = await prisma.doctor.count();
    const adminCount = await prisma.admin.count();
    const appointmentsCount = await prisma.appointment.count();
    const paymentCount = await prisma.payment.count();

    const totalRevenue = await prisma.payment.aggregate({
        _sum: {
            ammount: true
        },
        where: {
            paymentStatus: PaymentStatus.PAID
        }
    })

    const barChartData = getBarChartData();
    const pieChartData = getPieChartData();

    return {
        patientCount,
        doctorCount,
        adminCount,
        appointmentsCount,
        paymentCount,
        totalRevenue,
        barChartData,
        pieChartData
    }
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

const getPatientMetaData = async (user: IUserPayload) => {
    const patientData = await prisma.patient.findFirstOrThrow({
        where: {
            email: user.email,
            isDeleted: false
        }
    })

    const appointmentCount = await prisma.appointment.count({
        where: {
            patientId: patientData?.id
        }
    })

    const prescriptionCount = await prisma.prescription.count({
        where: {
            patientId: patientData?.id
        }
    })

    const reviewCount = await prisma.review.count({
        where: {
            patientId: patientData?.id
        }
    })

    const appointmentStatusDistribution = await prisma.appointment.groupBy({
        by: ['appointmentStatus'],
        _count: { id: true },
        where: {
            patientId: patientData?.id
        }
    })

    const formattedAppointmentStatusDistribution = appointmentStatusDistribution.map(({ appointmentStatus, _count }) => ({
        appointmentStatus,
        count: Number(_count.id)
    }))

    return {
        appointmentCount,
        prescriptionCount,
        reviewCount,
        formattedAppointmentStatusDistribution
    }
}

const getBarChartData = async () => {
    const appointmentCountPerMounth = await prisma.$queryRaw`
        SELECT DATE_TRUNC('mounth', 'createdAt') AS mounth,
        CAST(COUNT(*) AS INTEGER) AS count
        FROM "appointments"
        GROUP BY mounth
        ORDER BY mounth ASC
    `
    return appointmentCountPerMounth
}

const getPieChartData = async () => {
    const appointmentStatusDistribution = await prisma.appointment.groupBy({
        by: ['appointmentStatus'],
        _count: { id: true }
    })

    const formattedAppointmentStatusDistribution = appointmentStatusDistribution.map(({ appointmentStatus, _count }) => ({
        appointmentStatus,
        count: Number(_count.id)
    }))

    return formattedAppointmentStatusDistribution;
}

export const MetaDataService = {
    fetchDashboardMetaData
}