import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarsModel extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Cars');
  }

  public async updateOne(id: string, newCar: ICar): Promise<number> {
    const { modifiedCount } = await this.model.updateOne({ _id: id }, { ...newCar });
    return modifiedCount;
  }
}

export default CarsModel;