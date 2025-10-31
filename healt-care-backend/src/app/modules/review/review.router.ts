import express from 'express'
import { ReviewController } from './review.controller';
import { UserRole } from '@prisma/client';
import checkAuth from '../../middlewares/checkAuth';

const router = express.Router();

router.post('/', checkAuth(UserRole.PATIENT), ReviewController.postReview);


export const reviewRoutes = router;