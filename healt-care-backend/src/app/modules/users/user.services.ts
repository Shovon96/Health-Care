import { prisma } from "../../shared/prisma";
import { createPatient } from "./user.interface";
import bcrypt from "bcryptjs";

const createPatient = async (payload: createPatient) => {
    const passwordHash = await bcrypt.hash(payload.password, parseInt(process.env.BCRYPT_SALT_ROUNDS as string));

    const isEmailExist = await prisma.user.findUnique({ where: { email: payload.email } });
    if (isEmailExist) {
        throw new Error('Email already exists');
    }

    const result = await prisma.$transaction(async (trans) => {
        await trans.user.create({
            data: {
                email: payload.email,
                password: passwordHash
            }
        })
        return await trans.patient.create({
            data: {
                name: payload.name,
                email: payload.email
            }
        })
    })
    return result;
}


export const UserService = {
    createPatient
}