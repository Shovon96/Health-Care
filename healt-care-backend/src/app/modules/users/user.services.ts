import { Request } from "express";
import { prisma } from "../../shared/prisma";
import { createPatient } from "./user.interface";
import bcrypt from "bcryptjs";
import { FileUploader } from "../../helper/fileUploader";

const createPatient = async (req: Request) => {

    if (req.file) {
        const uploadResult = await FileUploader.uploadToCloudinary(req.file)
        console.log(uploadResult)
    }

    // const passwordHash = await bcrypt.hash(req.body.password, parseInt(process.env.BCRYPT_SALT_ROUNDS as string));

    // const isEmailExist = await prisma.user.findUnique({ where: { email: req.body.email } });
    // if (isEmailExist) {
    //     throw new Error('Email already exists');
    // }

    // const result = await prisma.$transaction(async (trans) => {
    //     await trans.user.create({
    //         data: {
    //             email: req.body.email,
    //             password: passwordHash
    //         }
    //     })
    //     return await trans.patient.create({
    //         data: {
    //             name: req.body.name,
    //             email: req.body.email
    //         }
    //     })
    // })
    // return result;
}


export const UserService = {
    createPatient
}