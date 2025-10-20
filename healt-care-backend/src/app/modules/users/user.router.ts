import { NextFunction, Request, Response, Router } from "express";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";
import { FileUploader } from "../../helper/fileUploader";
import { UserRole } from "@prisma/client";


const router = Router();

router.post('/create-patient',
    FileUploader.upload.single("file"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = UserValidation.createUserZodSchema.parse(JSON.parse(req.body.data));
        return UserController.createPatient(req, res, next)
    }
);

router.post(
    "/create-admin",
    // auth(UserRole.ADMIN),
    FileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = UserValidation.createAdminValidationSchema.parse(JSON.parse(req.body.data))
        return UserController.createAdmin(req, res, next)
    }
);

router.post(
    "/create-doctor",
    // auth(UserRole.ADMIN),
    FileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        console.log(JSON.parse(req.body.data))
        req.body = UserValidation.createDoctorValidationSchema.parse(JSON.parse(req.body.data))
        return UserController.createDoctor(req, res, next)
    }
);

export const userRoutes = router