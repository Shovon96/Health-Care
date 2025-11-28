import { NextFunction, Request, Response, Router } from "express";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";
import { FileUploader } from "../../helper/fileUploader";
import { UserRole } from "@prisma/client";
import checkAuth from "../../middlewares/checkAuth";


const router = Router();

router.get("/profile",
    checkAuth(UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
    UserController.getMyProfile)

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

router.patch('/:id/status', checkAuth(UserRole.ADMIN), UserController.changeProfileStatus)

router.patch(
    "/update-my-profile",
    checkAuth(UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
    FileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data)
        return UserController.updateMyProfie(req, res, next)
    }
);


export const userRoutes = router