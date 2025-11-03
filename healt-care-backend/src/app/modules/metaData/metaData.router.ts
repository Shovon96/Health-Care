import express from 'express';
import { UserRole } from '@prisma/client';
import checkAuth from '../../middlewares/checkAuth';
import { MetaDataController } from './metaData.controller';

const router = express.Router();

router.get(
    '/',
    checkAuth(UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
    MetaDataController.fetchDashboardMetaData
)


export const metaDataRoutes = router;