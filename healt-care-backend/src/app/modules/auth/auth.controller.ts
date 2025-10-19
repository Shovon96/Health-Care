import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { AuthService } from "./auth.services";


const loginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.loginUser(req.body)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Login successfully',
        data: result
    });
})


export const AuthController = {
    loginUser
}