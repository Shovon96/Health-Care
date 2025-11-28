import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { UserService } from "./user.services";
import pick from "../../helper/pick";
import httpStatus from 'http-status'
import { IUserPayload } from "../../type/index.type";

const createPatient = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.createPatient(req)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Patient created successfully',
        data: result
    });
})

const createAdmin = catchAsync(async (req: Request, res: Response) => {

    const result = await UserService.createAdmin(req);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Admin Created successfuly!",
        data: result
    })
});

const createDoctor = catchAsync(async (req: Request, res: Response) => {

    const result = await UserService.createDoctor(req);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Doctor Created successfuly!",
        data: result
    })
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {

    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const filters = pick(req.query, ["status", "role", "email", "searchTerms"]);
    const result = await UserService.getAllUsers(options, filters);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Users retrieved successfuly!",
        data: result
    })
});

const getMyProfile = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {

    const user = req.user;

    const result = await UserService.getMyProfile(user as IUserPayload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "My profile data fetched!",
        data: result
    })
});

const changeProfileStatus = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;
    const result = await UserService.changeProfileStatus(id, req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Users profile status changed!",
        data: result
    })
});

const updateMyProfie = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {

    const user = req.user;
    const result = await UserService.updateMyProfie(user as IUserPayload, req);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "My profile updated!",
        data: result
    })
});

export const UserController = {
    createPatient,
    createAdmin,
    createDoctor,
    getAllUsers,
    getMyProfile,
    changeProfileStatus,
    updateMyProfie
}