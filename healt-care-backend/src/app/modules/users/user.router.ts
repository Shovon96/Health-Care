import { NextFunction, Request, Response, Router } from "express";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";
import { FileUploader } from "../../helper/fileUploader";


const router = Router();

router.post('/create-patient',
    FileUploader.upload.single("file"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = UserValidation.createUserZodSchema.parse(JSON.parse(req.body.data));
        return UserController.createPatient(req, res, next)
    }
);

export const userRoutes = router