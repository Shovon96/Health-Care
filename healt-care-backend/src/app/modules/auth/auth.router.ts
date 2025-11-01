import { Router } from "express";
import { AuthController } from "./auth.controller";
import checkAuth from "../../middlewares/checkAuth";
import { UserRole } from "@prisma/client";


const router = Router();


router.get("/me", AuthController.getMe)

router.post('/login', AuthController.loginUser);

router.post('/refresh-token', AuthController.refreshToken)

router.post('/change-password',
    checkAuth(
        UserRole.ADMIN,
        UserRole.DOCTOR,
        UserRole.PATIENT
    ),
    AuthController.changePassword
);

router.post('/forgot-password', AuthController.forgotPassword);

router.post('/reset-password', AuthController.resetPassword)

export const authRoutes = router