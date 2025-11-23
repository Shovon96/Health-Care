/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { serverFetch } from "@/src/lib/server-fetch";
import z from "zod"

const createSpecialityZodSchema = z.object({
    title: z.string().min(1, "Title is required"),
})

export async function createSpeciality(_prevState: any, formData: FormData) {
    try {
        const payloade = {
            title: formData.get("title") as string,
        }

        const validatedPayload = createSpecialityZodSchema.safeParse(payloade);
        if (!validatedPayload.success) {
            return {
                success: false,
                errors: validatedPayload.error.issues.map(issue => {
                    return { field: issue.path[0], message: issue.message }
                }),
            }
        }

        const newFormData = new FormData();
        newFormData.append("data", JSON.stringify(validatedPayload));

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob);
        }

        const response = await serverFetch.post("/specialties", {
            body: newFormData,
        });

        return response
    } catch (error: any) {
        console.log(error.message)
    }
}

export async function getSpeciality() {
    try {
        const response = await serverFetch.get("/specialties");
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error.message)
    }
};

export async function deleteSpeciality(id: string) {
    try {
        const response = await serverFetch.delete(`/specialties/${id}`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error.message)
    }
}