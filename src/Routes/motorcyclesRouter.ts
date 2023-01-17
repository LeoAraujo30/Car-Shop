import express from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const controller = new MotorcyclesController();

const router = express.Router();

router.post('/', controller.addMotorcycle);

router.get('/:id', controller.getOne);

router.get('/', controller.getAll);

export default router;
