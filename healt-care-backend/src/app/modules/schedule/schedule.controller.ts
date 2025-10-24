import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { ScheduleService } from "./schedule.service";
import pick from "../../helper/pick";

const createSchedule = catchAsync(async (req: Request, res: Response) => {

    const result = await ScheduleService.createSchedule(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Schedule Created successfuly!",
        data: result
    })
});

const getAllSchedules = catchAsync(async (req: Request, res: Response) => {
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const filters = pick(req.query, ["startDateTime", "endDateTime"]);
    const result = await ScheduleService.getAllSchedules(options, filters);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Schedules retrieved successfully!",
        data: result
    })
});


export const ScheduleController = {
    createSchedule,
    getAllSchedules
};