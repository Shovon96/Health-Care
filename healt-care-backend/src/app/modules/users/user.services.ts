import { Request } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../shared/prisma";
import { createPatient } from "./user.interface";
import { FileUploader } from "../../helper/fileUploader";
import config from "../../../config";
import { Admin, Doctor, UserRole } from "@prisma/client";

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

const createAdmin = async (req: Request): Promise<Admin> => {

    const isUserExist = await prisma.user.findUnique({ where: { email: req?.body?.doctor?.email } });
    if (isUserExist) {
        throw new Error('This Email with user already exists!');
    }

    const file = req.file;

    if (file) {
        const uploadToCloudinary = await FileUploader.uploadToCloudinary(file);
        req.body.admin.profilePhoto = uploadToCloudinary?.secure_url
    }

    const hashedPassword: string = await bcrypt.hash(req.body.password, parseInt(config.bcrypt_salt_rounds as string))

    const userData = {
        email: req.body.admin.email,
        password: hashedPassword,
        role: UserRole.ADMIN
    }

    const result = await prisma.$transaction(async (transactionClient) => {
        await transactionClient.user.create({
            data: userData
        });

        const createdAdminData = await transactionClient.admin.create({
            data: req.body.admin
        });

        return createdAdminData;
    });

    return result;
};

const createDoctor = async (req: Request): Promise<Doctor> => {

    const isUserExist = await prisma.user.findUnique({ where: { email: req?.body?.doctor?.email } });
    if (isUserExist) {
        throw new Error('This Email with user already exists!');
    }

    const file = req.file;

    if (file) {
        const uploadToCloudinary = await FileUploader.uploadToCloudinary(file);
        req.body.doctor.profilePhoto = uploadToCloudinary?.secure_url
    }
    const hashedPassword: string = await bcrypt.hash(req.body.password, parseInt(config.bcrypt_salt_rounds as string))

    const userData = {
        email: req.body.doctor.email,
        password: hashedPassword,
        role: UserRole.DOCTOR
    }

    const result = await prisma.$transaction(async (transactionClient) => {
        await transactionClient.user.create({
            data: userData
        });

        const createdDoctorData = await transactionClient.doctor.create({
            data: req.body.doctor
        });

        return createdDoctorData;
    });

    return result;
};

const getAllUsers = async ({ limit, page, search, sortBy }:
    { limit: number, page: number, search?: any, sortBy?: any }) => {
    const pageNumber = page || 1;
    const limitNumber = limit || 10;
    const skip = (pageNumber - 1) * limitNumber;
    const users = await prisma.user.findMany({
        skip,
        take: limitNumber,
        where: {
            email: { contains: search, mode: 'insensitive' }
        },
        orderBy: {
            email: sortBy === 'asc' ? 'asc' : 'desc'
        }
    });
    return users;
}

export const UserService = {
    createPatient,
    createAdmin,
    createDoctor,
    getAllUsers
}