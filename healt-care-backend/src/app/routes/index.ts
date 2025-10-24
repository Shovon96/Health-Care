import express from 'express';
import { userRoutes } from '../modules/users/user.router';
import { authRoutes } from '../modules/auth/auth.router';
import { scheduleRoutes } from '../modules/schedule/schedule.router';


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
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;