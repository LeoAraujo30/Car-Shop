import { model, Model, models, Schema } from 'mongoose';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected modelName: string;
  protected model: Model<T>; 

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model<T>(this.modelName, this.schema);
  }

  public async addVehicle(vehicle: T): Promise<T> {
    return this.model.create(vehicle);
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getOne(id: string): Promise<T | null> {
    return this.model.findById(id);
  }
}

export default AbstractODM;