import { Doctor, Prisma } from "@prisma/client"
import ApiError from "../../helper/ApiError"
import { IOptions, paginationHelper } from "../../helper/paginationHelper"
import { prisma } from "../../shared/prisma"
import { IUserPayload } from "../../type/index.type"
import httpStatus from "http-status"
import { IDoctorUpdateInfo } from "./doctor.type"
import { extractJsonFromMessage, openai } from "../../helper/openAi"

const createDoctorSchedule = async (user: IUserPayload, payload: { scheduleIds: string[] }) => {
    const doctorData = await prisma.doctor.findUniqueOrThrow({
        where: { email: user.email }
    })

    if (!doctorData?.id) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Only doctors can create schedules!")
    }

    const doctorScheduleData = payload.scheduleIds.map(scheduleId => ({
        doctorId: doctorData.id,
        scheduleId
    }))

    return await prisma.doctorSchedule.createMany({
        data: doctorScheduleData
    })

}


const getAllDoctors = async (options: IOptions, filters: any) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper.paginate(options)
    const { searchTerm, ...filterData } = filters

    const doctorSearchableFields = ['email', 'name', 'contactNumber']
    const andConditions: Prisma.DoctorWhereInput[] = []

    if (searchTerm) {
        andConditions.push({
            OR: doctorSearchableFields.map((field) => ({
                [field]: { contains: searchTerm, mode: 'insensitive' }
            }))
        })
    }

    if (Object.keys(filterData).length > 0) {
        const filterConditions = Object.keys(filterData).map((key) => ({
            [key]: { equals: filterData[key] }
        }))
        andConditions.push(...filterConditions)
    }

    const whereConditions: Prisma.DoctorWhereInput = andConditions.length > 0 ? { AND: andConditions } : {}

    const result = await prisma.doctor.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder
        }
    })

    const total = await prisma.doctor.count({ where: whereConditions })

    return {
        meta: {
            total,
            page,
            limit
        },
        data: result
    }

}


const updateDoctorInfo = async (doctorId: string, payload: Partial<IDoctorUpdateInfo>) => {
    const doctorInfo = await prisma.doctor.findFirstOrThrow({
        where: { id: doctorId }
    })

    const { specialties, ...doctorData } = payload;

    return await prisma.$transaction(async (tnx) => {
        if (specialties && specialties.length > 0) {

            const deleteSpecialtiesId = specialties.filter((specialty: any) => specialty.isDeleted)

            for (const specialty of deleteSpecialtiesId) {
                await tnx.doctorSpecialties.deleteMany({
                    where: {
                        doctorId: doctorId,
                        specialitiesId: specialty.specialtyId
                    }
                })
            }

            const createSpecialtyIds = specialties.filter((specialty) => !specialty.isDeleted);

            for (const specialty of createSpecialtyIds) {
                await tnx.doctorSpecialties.create({
                    data: {
                        doctorId: doctorId,
                        specialitiesId: specialty.specialtyId
                    }
                })
            }
        }

        const updatedData = await tnx.doctor.update({
            where: {
                id: doctorInfo.id
            },
            data: doctorData,
            include: {
                doctorSpecialties: {
                    include: {
                        specialities: true
                    }
                }
            }
        })

        return updatedData
    })

}

const getAiSuggestionDoctor = async (payload: { symptoms: string }) => {

    if (!(payload && payload.symptoms)) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Prompt is required!")
    }

    const doctors = await prisma.doctor.findMany({
        where: { isDeleted: false },
        include: {
            doctorSpecialties: {
                include: { specialities: true }
            }
        }
    })

    const prompt = `You are a medical assistant AI. Based on the patient's symptoms, suggest the top 3 most suitable doctors. Each doctor has specialties and years of experience. Only suggest doctors who are relevant to the given symptoms. 
    Symptoms: ${payload.symptoms} 
    Here is the doctor list (in JSON): ${JSON.stringify(doctors, null, 2)}
    Return your response in JSON format with full individual doctor data.
    `;

    const completion = await openai.chat.completions.create({
        model: 'z-ai/glm-4.5-air:free',
        messages: [
            {
                role: "system",
                content:
                    "You are a helpful AI medical assistant that provides doctor suggestions.",
            },
            {
                role: 'user',
                content: prompt,
            },
        ],
    });

    const result = await extractJsonFromMessage(completion.choices[0].message)
    return result;

}

export const DoctorService = {
    createDoctorSchedule,
    getAllDoctors,
    updateDoctorInfo,
    getAiSuggestionDoctor
};