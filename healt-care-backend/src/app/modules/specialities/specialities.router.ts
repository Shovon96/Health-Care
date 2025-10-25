import express, { NextFunction, Request, Response } from 'express'
import { UserRole } from '@prisma/client';
import { SpecialtiesController } from './specialities.controller';
import { FileUploader } from '../../helper/fileUploader';
import { SpecialtiesValidtaion } from './specialities.validation';
import checkAuth from '../../middlewares/checkAuth';


const router = express.Router();

router.get(
    '/',
    SpecialtiesController.getAllFromDB
);

router.post(
    '/',
    FileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = SpecialtiesValidtaion.create.parse(JSON.parse(req.body.data))
        return SpecialtiesController.inserIntoDB(req, res, next)
    }
);

router.delete(
    '/:id',
    checkAuth(UserRole.DOCTOR, UserRole.ADMIN),
    SpecialtiesController.deleteFromDB
);

export const specialtiesRoutes = router;