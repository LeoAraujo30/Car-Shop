import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesModel from '../Models/MotorcyclesModel';

class MotorcyclesService {
  constructor(private model = new MotorcyclesModel()) {}

  public async addMotorcycle(motorcycle: IMotorcycle): Promise<Motorcycle> {
    const obj: IMotorcycle = {
      model: motorcycle.model,
      year: motorcycle.year,
      color: motorcycle.color,
      status: motorcycle.status || false,
      buyValue: motorcycle.buyValue,
      category: motorcycle.category,
      engineCapacity: motorcycle.engineCapacity,
    };
    const newObj = await this.model.addVehicle(obj);
    return new Motorcycle(newObj);
  }

  public async getAll(): Promise<Motorcycle[]> {
    const arraymotorcycles = await this.model.getAll();
    const result = arraymotorcycles.map((motorcycle) => new Motorcycle(motorcycle));
    return result;
  }

  public async getOne(id: string): Promise<Motorcycle | null> {
    const objmotorcycle = await this.model.getOne(id);
    if (objmotorcycle) return new Motorcycle(objmotorcycle);
    return null;
  }
}

export default MotorcyclesService;