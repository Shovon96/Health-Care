import { Router } from "express";
import { ScheduleController } from "./schedule.controller";


const router = Router();

router.get('/', ScheduleController.getAllSchedules);
router.post('/', ScheduleController.createSchedule);

export const scheduleRoutes = router;