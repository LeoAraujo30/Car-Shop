import { model, models, Model, Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcyclesModel extends AbstractODM<IMotorcycle> {
  private schema: Schema;
  private model: Model<IMotorcycle>; 

  constructor() {
    super();
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycles || model<IMotorcycle>('Motorcycles', this.schema);
  }

  public async addVehicle(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    const result = this.model.create(motorcycle);
    return result;
  }

  // public async getAll(): Promise<IMotorcycle[]> {
  //   return this.model.find();
  // }

  // public async getOne(id: string): Promise<IMotorcycle | null> {
  //   return this.model.findById(id);
  // }

  // public async updateOne(id: string, newCar: IMotorcycle): Promise<number> {
  //   const { modifiedCount } = await this.model.updateOne({ _id: id }, { ...newCar });
  //   return modifiedCount;
  // }
}

export default MotorcyclesModel;