import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { PrescriptionService } from "./prescription.service";
import sendResponse from "../../shared/sendResponse";
import { IUserPayload } from "../../type/index.type";

const createPrescription = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {
    const user = req.user;
    const result = await PrescriptionService.createPrescription(user as IUserPayload, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "prescription created successfully!",
        data: result
    })
})

export const PrescriptionController = {
    createPrescription
}