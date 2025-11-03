import express from 'express';
import { userRoutes } from '../modules/users/user.router';
import { authRoutes } from '../modules/auth/auth.router';
import { scheduleRoutes } from '../modules/schedule/schedule.router';
import { doctorRouter } from '../modules/doctor/doctor.router';
import { specialtiesRoutes } from '../modules/specialities/specialities.router'
import { appointmentsRouters } from '../modules/appointment/appointment.router';
import { prescriptionRoutes } from '../modules/prescription/prescription.route';
import { reviewRoutes } from '../modules/review/review.router';
import { patientRoutes } from '../modules/patient/patient.router';
import { metaDataRoutes } from '../modules/metaData/metaData.router';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/schedule',
        route: scheduleRoutes
    },
    {
        path: '/doctor',
        route: doctorRouter
    },
    {
        path: '/patient',
        route: patientRoutes
    },
    {
        path: '/specialties',
        route: specialtiesRoutes
    },
    {
        path: '/appointment',
        route: appointmentsRouters
    },
    {
        path: '/prescription',
        route: prescriptionRoutes
    },
    {
        path: '/review',
        route: reviewRoutes
    },
    {
        path: '/metadata',
        route: metaDataRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;