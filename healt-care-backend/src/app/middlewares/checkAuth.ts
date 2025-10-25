import { NextFunction, Request, Response } from "express"
import { JwtHelper } from "../helper/jwtHelper";
import config from "../../config";
import ApiError from "../helper/ApiError";
import httpStatus from "http-status"

const checkAuth = (...roles: string[]) => {
    return async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
        try {
            const token = req.cookies.accessToken

            if (!token) {
                throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized to access this route');
            }

            const verifyedToken = JwtHelper.verifyToken(token, config.jwt_secret as string);

            req.user = verifyedToken;

            if (roles.length && !roles.includes(verifyedToken.role)) {
                throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized to access this route');
            }

            next();

        } catch (error: any) {
            res.status(403).json({ message: error.message });
        }
    }
}


export default checkAuth;