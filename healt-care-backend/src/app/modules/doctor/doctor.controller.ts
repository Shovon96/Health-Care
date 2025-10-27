import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { DoctorService } from "./doctor.srevice";
import { IUserPayload } from "../../type/index.type";
import pick from "../../helper/pick";


const getAllDoctors = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const filters = pick(req.query, ["searchTerm", "email", "contactNumber", "appointmentFee", "specialist"]);
    const result = await DoctorService.getAllDoctors(options, filters);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Doctors retrieved successfully!",
        meta: result.meta,
        data: result.data
    })
})


const createDoctorSchedule = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {
    const user = req.user;
    const result = await DoctorService.createDoctorSchedule(user as IUserPayload, req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Schedules created successfully!",
        data: result
    })
})


const updateDoctorInfo = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {
    const { doctorId } = req.params
    const result = await DoctorService.updateDoctorInfo(doctorId, req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Doctor Info successfully!",
        data: result
    })
})

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await DoctorService.getByIdFromDB(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Doctor retrieval successfully',
        data: result,
    });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await DoctorService.deleteFromDB(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Doctor deleted successfully',
        data: result,
    });
});


const softDelete = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await DoctorService.softDelete(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Doctor soft deleted successfully',
        data: result,
    });
});

const getAiSuggestionDoctor = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {
    const result = await DoctorService.getAiSuggestionDoctor(req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Ai suggestion doctors retrived successfully!",
        data: result
    })
})


export const DoctorController = {
    createDoctorSchedule,
    getAllDoctors,
    updateDoctorInfo,
    getByIdFromDB,
    deleteFromDB,
    softDelete,
    getAiSuggestionDoctor
};