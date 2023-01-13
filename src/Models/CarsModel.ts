import { model, models, Model, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarsModel {
  private schema: Schema;
  private model: Model<ICar>; 

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Cars || model<ICar>('Cars', this.schema);
  }

  public async addCar(car: ICar): Promise<ICar> {
    return this.model.create(car);
  }
}
  
export default CarsModel;