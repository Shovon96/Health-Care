import { Gender } from "@prisma/client";

export type IDoctorUpdateInfo = {
    name: string;
    email: string;
    contactNumber: string;
    address: string;
    registrationNumber: string;
    experience: number;
    gender: Gender;
    appointmentFee: number;
    qualification: string;
    currentWorkingPlace: string | null;
    designation: string;
    isDeleted: boolean;
    specialties: {
        specialtyId: string;
        isDeleted: boolean;
    }[]
}