import express from 'express';
import carsRouter from './carsRouter';

const routers = express();

routers.use('/cars', carsRouter);

export default routers;
