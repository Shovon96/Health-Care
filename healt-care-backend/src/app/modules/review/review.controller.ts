import { Request, Response } from "express";
import httpStatus from "http-status";
import { ReviewService } from "./review.service";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { IUserPayload } from "../../type/index.type";

const postReview = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {
    const user = req.user;
    const result = await ReviewService.postReview(user as IUserPayload, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Review created successfully',
        data: result,
    });
});

export const ReviewController = {
    postReview
}