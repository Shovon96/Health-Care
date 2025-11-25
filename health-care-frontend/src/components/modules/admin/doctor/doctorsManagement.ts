/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/src/lib/server-fetch";
import { zodValidation } from "@/src/lib/zodValidation";
import { IDoctor } from "@/src/types/doctor.interface";
import { createDoctorZodSchema } from "@/src/zodValidators/doctor.validation";

export async function createDoctor(_prevState: any, formData: FormData) {
    try {
        const payload: IDoctor = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            contactNumber: formData.get("contactNumber") as string,
            address: formData.get("address") as string,
            registrationNumber: formData.get("registrationNumber") as string,
            experience: Number(formData.get("experience") as string),
            gender: formData.get("gender") as "MALE" | "FEMALE",
            appointmentFee: Number(formData.get("appointmentFee") as string),
            qualification: formData.get("qualification") as string,
            currentWorkingPlace: formData.get("currentWorkingPlace") as string,
            designation: formData.get("designation") as string,
            password: formData.get("password") as string,
        }

        if (zodValidation(payload, createDoctorZodSchema).success === false) {
            return zodValidation(payload, createDoctorZodSchema);
        }

        const validatedPayload = zodValidation(payload, createDoctorZodSchema).data;

        if (!validatedPayload) {
            throw new Error("Validation failed");
        }

        const newPayload = {
            password: validatedPayload.password,
            doctor: {
                name: validatedPayload.name,
                email: validatedPayload.email,
                contactNumber: validatedPayload.contactNumber,
                address: validatedPayload.address,
                registrationNumber: validatedPayload.registrationNumber,
                experience: validatedPayload.experience,
                gender: validatedPayload.gender,
                appointmentFee: validatedPayload.appointmentFee,
                qualification: validatedPayload.qualification,
                currentWorkingPlace: validatedPayload.currentWorkingPlace,
                designation: validatedPayload.designation,
            }
        };

        const newFormData = new FormData();
        newFormData.append("data", JSON.stringify(newPayload));

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob);
        }

        const response = await serverFetch.post("/user/create-doctor", {
            body: newFormData,
        })

        const result = await response.json();
        return result;

    } catch (error: any) {
        console.log(error.message)
    }
}