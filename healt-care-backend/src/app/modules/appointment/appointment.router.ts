import { Router } from "express";
import checkAuth from "../../middlewares/checkAuth";
import { UserRole } from "@prisma/client";
import { AppointmentController } from "./appointment.cotroller";

const router = Router()

router.post('/', checkAuth(UserRole.PATIENT), AppointmentController.createAppointment)

export const appointmentsRouters = router