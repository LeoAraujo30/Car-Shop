import express from 'express';
import carsRouter from './carsRouter';
import MotorcyclesRouter from './motorcyclesRouter';

const routers = express();

routers.use('/cars', carsRouter);
routers.use('/motorcycles', MotorcyclesRouter);

export default routers;
