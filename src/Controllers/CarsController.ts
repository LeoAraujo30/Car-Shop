import { Request, Response } from 'express';
import CarsService from '../Services/CarsService';

class CarsController {
  constructor(private service = new CarsService()) {}

  public addCar = async (req: Request, res: Response) => {
    const result = await this.service.addCar(req.body);
    res.status(201).json(result);
  };
}

export default CarsController;