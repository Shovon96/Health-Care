import { Router } from "express";
import { DoctorController } from "./doctor.controller";
import checkAuth from "../../middlewares/checkAuth";
import { UserRole } from "@prisma/client";


const router = Router()
router.get('/', DoctorController.getAllDoctors)
router.patch('/:doctorId', DoctorController.updateDoctorInfo)
router.post('/suggestion', DoctorController.getAiSuggestionDoctor)
router.post('/schedule', checkAuth(UserRole.DOCTOR), DoctorController.createDoctorSchedule)

export const doctorRouter = router;