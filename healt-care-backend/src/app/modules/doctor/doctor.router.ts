import { Router } from "express";
import { DoctorController } from "./doctor.controller";
import checkAuth from "../../middlewares/checkAuth";
import { UserRole } from "@prisma/client";


const router = Router()
router.get('/', DoctorController.getAllDoctors)
router.post('/schedule', checkAuth(UserRole.DOCTOR), DoctorController.createDoctorSchedule)

export const doctorRouter = router;