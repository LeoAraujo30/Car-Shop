import { Request, Response } from 'express';
import MotorcyclesService from '../Services/MotorcyclesService';

class MotorcyclesController {
  constructor(private service = new MotorcyclesService()) {}

  public addMotorcycle = async (req: Request, res: Response) => {
    const result = await this.service.addMotorcycle(req.body);
    res.status(201).json(result);
  };

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.service.getAll();
    res.status(200).json(result);
  };

  public getOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (id.length !== 24) return res.status(422).json({ message: 'Invalid mongo id' });
    const result = await this.service.getOne(id);
    if (result) return res.status(200).json(result);
    return res.status(404).json({ message: 'Motorcycle not found' });
  };
}

export default MotorcyclesController;