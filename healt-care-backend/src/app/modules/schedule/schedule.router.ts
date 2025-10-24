import { Router } from "express";
import { ScheduleController } from "./schedule.controller";
import checkAuth from "../../middlewares/checkAuth";
import { UserRole } from "@prisma/client";


const router = Router();

router.get('/', checkAuth(UserRole.DOCTOR, UserRole.ADMIN), ScheduleController.getAllSchedules);
router.post('/', checkAuth(UserRole.DOCTOR, UserRole.ADMIN), ScheduleController.createSchedule);
router.delete('/:scheduleId', checkAuth(UserRole.DOCTOR, UserRole.ADMIN), ScheduleController.deleteSchedule);

export const scheduleRoutes = router;