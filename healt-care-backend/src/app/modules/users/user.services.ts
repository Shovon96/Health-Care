import { Request } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../shared/prisma";
import { createPatient } from "./user.interface";
import { FileUploader } from "../../helper/fileUploader";
import config from "../../../config";

const createPatient = async (req: Request) => {

    const isUserExist = await prisma.user.findUnique({ where: { email: req?.body.patient?.email } });
    if (isUserExist) {
        throw new Error('This Email with user already exists!');
    }

    if (req.file) {
        const uploadResult = await FileUploader.uploadToCloudinary(req.file)
        req.body.patient.profilePhoto = uploadResult?.secure_url;
    }

    const passwordHash = await bcrypt.hash(req.body.password, parseInt(config.bcrypt_salt_rounds as string));

    const result = await prisma.$transaction(async (trans) => {
        await trans.user.create({
            data: {
                email: req?.body?.patient?.email,
                password: passwordHash
            }
        })
        return await trans.patient.create({
            data: req?.body?.patient
        })
    })
    return result;
}


export const UserService = {
    createPatient
}