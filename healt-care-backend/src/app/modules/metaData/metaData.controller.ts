import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { IUserPayload } from "../../type/index.type";
import { MetaDataService } from "./metaData.service";


const fetchDashboardMetaData = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {

    const user = req.user;
    const result = await MetaDataService.fetchDashboardMetaData(user as IUserPayload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Meta data retrival successfully!",
        data: result
    })
});

export const MetaDataController = {
    fetchDashboardMetaData
}