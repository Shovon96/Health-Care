/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/src/lib/server-fetch";
import { zodValidation } from "@/src/lib/zodValidation";
import { IDoctor } from "@/src/types/doctor.interface";
import { createDoctorZodSchema } from "@/src/zodValidators/doctor.validation";


export async function createDoctor(_prevState: any, formData: FormData) {

    // Parse specialties array
    const specialtiesString = formData.get("specialties") as string;
    let specialties: string[] = [];
    if (specialtiesString) {
        try {
            specialties = JSON.parse(specialtiesString);
            if (!Array.isArray(specialties)) specialties = [];
        } catch {
            specialties = [];
        }
    }

    const experienceValue = formData.get("experience");
    const appointmentFeeValue = formData.get("appointmentFee");


    const validationPayload: IDoctor = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        contactNumber: formData.get("contactNumber") as string,
        address: formData.get("address") as string,
        registrationNumber: formData.get("registrationNumber") as string,
        experience: experienceValue ? Number(experienceValue) : 0,
        gender: formData.get("gender") as "MALE" | "FEMALE",
        appointmentFee: appointmentFeeValue ? Number(appointmentFeeValue) : 0,
        qualification: formData.get("qualification") as string,
        currentWorkingPlace: formData.get("currentWorkingPlace") as string,
        designation: formData.get("designation") as string,
        password: formData.get("password") as string,
        specialties: specialties,
        profilePhoto: formData.get("file") as File,
    }

    const validatedPayload = zodValidation(validationPayload, createDoctorZodSchema);

    if (!validatedPayload.success && validatedPayload.errors) {
        return {
            success: validatedPayload.success,
            message: "Submission failed",
            formData: validationPayload,
            errors: validatedPayload.errors,
        }
    }

    if (!validatedPayload.data) {
        return {
            success: false,
            message: "Validation failed",
            formData: validationPayload,
        }
    }
    const backendPayload = {
        password: validatedPayload.data.password,
        doctor: {
            name: validatedPayload.data.name,
            email: validatedPayload.data.email,
            contactNumber: validatedPayload.data.contactNumber,
            address: validatedPayload.data.address,
            registrationNumber: validatedPayload.data.registrationNumber,
            experience: validatedPayload.data.experience,
            gender: validatedPayload.data.gender,
            appointmentFee: validatedPayload.data.appointmentFee,
            qualification: validatedPayload.data.qualification,
            currentWorkingPlace: validatedPayload.data.currentWorkingPlace,
            designation: validatedPayload.data.designation,
            specialties: validatedPayload.data.specialties,
        }
    };
    const newFormData = new FormData()
    newFormData.append("data", JSON.stringify(backendPayload))
    newFormData.append("file", formData.get("file") as Blob)

    try {
        const response = await serverFetch.post("/user/create-doctor", {
            body: newFormData,
        })

        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`,
            formData: validationPayload,

        }
    }
}

export async function getAllDoctors(queryParams?: string) {
    try {
        const response = await serverFetch.get(`/doctor${queryParams ? `?${queryParams}` : ""}`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error.message)
    }
}

export async function getSingleDoctorById(doctorId: string) {
    try {
        const response = await serverFetch.get(`/doctor/${doctorId}`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error.message)
    }
}

export async function updateDoctorById(doctorId: string, _prevState: any, formData: FormData) {
    try {
        const payload: Partial<IDoctor> = {
            name: formData.get("name") as string,
            contactNumber: formData.get("contactNumber") as string,
            address: formData.get("address") as string,
            registrationNumber: formData.get("registrationNumber") as string,
            experience: Number(formData.get("experience") as string),
            gender: formData.get("gender") as "MALE" | "FEMALE",
            appointmentFee: Number(formData.get("appointmentFee") as string),
            qualification: formData.get("qualification") as string,
            currentWorkingPlace: formData.get("currentWorkingPlace") as string,
            designation: formData.get("designation") as string,
        }

        const validatedPayload = zodValidation(payload, createDoctorZodSchema.partial()).data;

        const response = await serverFetch.patch(`/doctor/${doctorId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validatedPayload),
        })
        const result = await response.json();
        return result;

    } catch (error: any) {
        console.log(error.message)
    }
}

export async function softDeleteDoctorById(doctorId: string) {
    try {
        const response = await serverFetch.delete(`/doctor/soft/${doctorId}`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error.message)
    }
}

export async function deleteDoctorById(doctorId: string) {
    try {
        const response = await serverFetch.delete(`/doctor/${doctorId}`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error.message)
    }
}