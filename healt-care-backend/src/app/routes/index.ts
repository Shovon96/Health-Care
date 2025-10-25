import express from 'express';
import { userRoutes } from '../modules/users/user.router';
import { authRoutes } from '../modules/auth/auth.router';
import { scheduleRoutes } from '../modules/schedule/schedule.router';
import { doctorRouter } from '../modules/doctor/doctor.router';
import { specialtiesRoutes } from '../modules/specialities/specialities.router';


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
        path: '/specialties',
        route: specialtiesRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;