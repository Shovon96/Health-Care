import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { PrescriptionService } from "./prescription.service";
import sendResponse from "../../shared/sendResponse";
import { IUserPayload } from "../../type/index.type";
import pick from "../../helper/pick";
import httpStatus from "http-status";

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

const patientPrescription = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {
    const user = req.user;
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
    const result = await PrescriptionService.patientPrescription(user as IUserPayload, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Prescription fetched successfully',
        meta: result.meta,
        data: result.data
    });
});


export const PrescriptionController = {
    createPrescription,
    patientPrescription
}