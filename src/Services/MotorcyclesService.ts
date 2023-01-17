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

  // public async getAll(): Promise<motorcycle[]> {
  //   const arraymotorcycles = await this.model.getAll();
  //   const result = arraymotorcycles.map((motorcycle) => new motorcycle(motorcycle));
  //   return result;
  // }

  // public async getOne(id: string): Promise<motorcycle | null> {
  //   const objmotorcycle = await this.model.getOne(id);
  //   if (objmotorcycle) return new motorcycle(objmotorcycle);
  //   return null;
  // }

  // public async updateOne(id: string, newmotorcycle: IMotorcycle): Promise<motorcycle | null> {
  //   const modifiedCount = await this.model.updateOne(id, newmotorcycle);
  //   const objmotorcycle = await this.model.getOne(id);
  //   if (modifiedCount === 0 && objmotorcycle === null) {
  //     return null;
  //   }
  //   return new motorcycle(objmotorcycle as IMotorcycle);
  // }
}

export default MotorcyclesService;