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
        message: "Schedules created successfully!",
        data: result
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


export const DoctorController = {
    createDoctorSchedule,
    getAllDoctors
};