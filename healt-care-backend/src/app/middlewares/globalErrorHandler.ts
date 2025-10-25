import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status"

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    let statusCode: number = httpStatus.INTERNAL_SERVER_ERROR;
    let success = false;
    let message = err.message || "Something went wrong!";
    let error = err;

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P1002') {
            statusCode = httpStatus.SERVICE_UNAVAILABLE;
            message = "Database connection error";
            error = err.meta;
        }
        if (err.code === 'P2002') {
            statusCode = httpStatus.BAD_REQUEST;
            message = 'Duplicate key error';
            error = err.meta;
        }
        if (err.code === 'P2025') {
            statusCode = httpStatus.NOT_FOUND;
            message = 'Record not found';
            error = err.meta;
        }
        if (err.code === 'P2003') {
            statusCode = httpStatus.BAD_REQUEST;
            message = 'Foreign key constraint failed';
            error = err.meta;
        }
    }

    else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
        statusCode = httpStatus.SERVICE_UNAVAILABLE;
        message = "An unknown error occurred with the database";
        error = err.message;
    }
    else if (err instanceof Prisma.PrismaClientValidationError) {
        statusCode = httpStatus.BAD_REQUEST;
        message = "Database validation error";
        error = err.message;
    }
    else if (err instanceof Prisma.PrismaClientInitializationError) {
        statusCode = httpStatus.SERVICE_UNAVAILABLE;
        message = "Database initialization error";
        error = err.message;
    }


    res.status(statusCode).json({
        success,
        message,
        error
    })
};

export default globalErrorHandler;