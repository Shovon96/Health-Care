import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { ScheduleService } from "./schedule.service";
import pick from "../../helper/pick";
import { IUserPayload } from "../../type/index.type";

const createSchedule = catchAsync(async (req: Request, res: Response) => {

    const result = await ScheduleService.createSchedule(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Schedule Created successfuly!",
        data: result
    })
});

const getAllSchedules = catchAsync(async (req: Request & { user?: IUserPayload }, res: Response) => {
    const user = req.user;
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const filters = pick(req.query, ["startDateTime", "endDateTime"]);
    const result = await ScheduleService.getAllSchedules(user as IUserPayload, options, filters);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Schedules retrieved successfully!",
        meta: result.meta,
        data: result.data
    })
});

const deleteSchedule = catchAsync(async (req: Request, res: Response) => {
    const { scheduleId } = req.params;
    const result = await ScheduleService.deleteSchedule(scheduleId);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Schedules deleted successfully!",
        data: result
    })
});


export const ScheduleController = {
    createSchedule,
    getAllSchedules,
    deleteSchedule
};