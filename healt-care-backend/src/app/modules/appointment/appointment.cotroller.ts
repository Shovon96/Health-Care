import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { IUserPayload } from "../../type/index.type";
import sendResponse from "../../shared/sendResponse";
import { AppointmentService } from "./appointment.service";
import pick from "../../helper/pick";

const createAppointment = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {
    const user = req.user as IUserPayload
    const result = await AppointmentService.createAppointment(user, req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Appointment booked successfully!",
        data: result
    })
})


const getMyAppointment = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {
    
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const fillters = pick(req.query, ["status", "paymentStatus"])
    const user = req.user;
    const result = await AppointmentService.getMyAppointment(user as IUserPayload, fillters, options);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Appointment fetched successfully!",
        data: result
    })
})

export const AppointmentController = {
    createAppointment,
    getMyAppointment
}