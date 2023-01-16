import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/CarsModel';

class CarsService {
  constructor(private model = new CarsModel()) {}

  public async addCar(car: ICar): Promise<Car> {
    const obj: ICar = {
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status || false,
      buyValue: car.buyValue,
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty,
    };
    const newObj = await this.model.addCar(obj);
    return new Car(newObj);
  }

  public async getAll(): Promise<Car[]> {
    const arrayCars = await this.model.getAll();
    const result = arrayCars.map((car) => new Car(car));
    return result;
  }

  public async getOne(id: string): Promise<Car | null> {
    const objCar = await this.model.getOne(id);
    if (objCar) return new Car(objCar);
    return null;
  }
}

export default CarsService;