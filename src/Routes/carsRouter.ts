import express from 'express';
import CarsController from '../Controllers/CarsController';

const controller = new CarsController();

const router = express.Router();

router.post('/', controller.addCar);

export default router;
