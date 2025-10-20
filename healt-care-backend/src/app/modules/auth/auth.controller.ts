import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { AuthService } from "./auth.services";


const loginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.loginUser(req.body)
    const { accessToken, refreshToken, needPasswordChange, user } = result;

    res.cookie('accessToken', accessToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'none',
        maxAge: 1 * 24 * 60 * 60 * 1000 // 1 day
    })

    res.cookie('refreshToken', refreshToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'none',
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    })

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Login successfully',
        data: {
            accessToken,
            refreshToken,
            needPasswordChange,
            user
        }
    });
})


export const AuthController = {
    loginUser
}