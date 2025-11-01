import { NextFunction, Request, Response, Router } from "express";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";
import { FileUploader } from "../../helper/fileUploader";
import { UserRole } from "@prisma/client";
import checkAuth from "../../middlewares/checkAuth";


const router = Router();

router.get("/profile", UserController.getProfile)

router.get("/all-users",
    checkAuth(UserRole.ADMIN),
    UserController.getAllUsers
)

router.post('/create-patient',
    FileUploader.upload.single("file"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = UserValidation.createUserZodSchema.parse(JSON.parse(req.body.data));
        return UserController.createPatient(req, res, next)
    }
);

router.post(
    "/create-admin",
    // checkAuth(UserRole.ADMIN),
    FileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = UserValidation.createAdminValidationSchema.parse(JSON.parse(req.body.data))
        return UserController.createAdmin(req, res, next)
    }
);

router.post(
    "/create-doctor",
    // checkAuth(UserRole.ADMIN),
    FileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        console.log(JSON.parse(req.body.data))
        req.body = UserValidation.createDoctorValidationSchema.parse(JSON.parse(req.body.data))
        return UserController.createDoctor(req, res, next)
    }
);

export const userRoutes = router