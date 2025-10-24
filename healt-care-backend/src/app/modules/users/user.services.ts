import { Request } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../shared/prisma";
import { createPatient } from "./user.interface";
import { FileUploader } from "../../helper/fileUploader";
import config from "../../../config";
import { Admin, Doctor, Prisma, UserRole } from "@prisma/client";
import { IOptions, paginationHelper } from "../../helper/paginationHelper";

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

    const isUserExist = await prisma.user.findUnique({ where: { email: req?.body?.admin?.email } });
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

const getAllUsers = async (options: IOptions, filters: any) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper.paginate(options)
    const { searchTerms, ...filterData } = filters

    const andConditions: Prisma.UserWhereInput[] = []
    const searchableValues = ['email']

    if (searchTerms) {
        andConditions.push({
            OR: searchableValues.map(field => ({
                [field]: { contains: searchTerms, mode: 'insensitive' }
            }))
        })
    }

    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: { equals: (filterData as any)[key] }
            }))
        })
    }

    const whereCondition: Prisma.UserWhereInput = andConditions.length > 0 ? {
        AND: andConditions
    } : {}

    const users = await prisma.user.findMany({
        skip,
        take: limit,
        where: whereCondition,
        orderBy: {
            [sortBy]: sortOrder
        }
    });

    const total = await prisma.user.count({ where: whereCondition })

    return {
        meta: {
            page,
            limit,
            total
        },
        data: {
            users
        }
    }
};

export const UserService = {
    createPatient,
    createAdmin,
    createDoctor,
    getAllUsers
}