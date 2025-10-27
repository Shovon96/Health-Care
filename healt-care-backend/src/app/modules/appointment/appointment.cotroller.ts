import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { IUserPayload } from "../../type/index.type";
import sendResponse from "../../shared/sendResponse";
import { AppointmentService } from "./appointment.service";

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


export const AppointmentController = {
    createAppointment
}