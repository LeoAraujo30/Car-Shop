import express from 'express';
import CarsController from '../Controllers/CarsController';

const controller = new CarsController();

const router = express.Router();

router.post('/', controller.addCar);

router.get('/:id', controller.getOne);

router.get('/', controller.getAll);

router.put('/:id', controller.updateOne);

export default router;
