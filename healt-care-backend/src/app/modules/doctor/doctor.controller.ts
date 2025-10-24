import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { DoctorService } from "./doctor.srevice";
import { IUserPayload } from "../../type/index.type";


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
    createDoctorSchedule
};