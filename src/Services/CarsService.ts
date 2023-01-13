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
}

export default CarsService;