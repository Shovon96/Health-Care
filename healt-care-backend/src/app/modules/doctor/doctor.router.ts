import { Router } from "express";
import { DoctorController } from "./doctor.controller";
import checkAuth from "../../middlewares/checkAuth";
import { UserRole } from "@prisma/client";


const router = Router()


router.get('/', DoctorController.getAllDoctors)

router.get('/:id', DoctorController.getByIdFromDB);

router.patch('/:doctorId', DoctorController.updateDoctorInfo)

router.post('/suggestion', DoctorController.getAiSuggestionDoctor)

router.post('/schedule', checkAuth(UserRole.DOCTOR), DoctorController.createDoctorSchedule)

router.delete('/:id', checkAuth(UserRole.ADMIN), DoctorController.deleteFromDB);

router.delete('/soft/:id', checkAuth(UserRole.ADMIN), DoctorController.softDelete);

export const doctorRouter = router;