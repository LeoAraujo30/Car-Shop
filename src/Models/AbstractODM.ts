abstract class AbstractODM<T> {
  abstract addVehicle(value: T): Promise<T>;

//   abstract getAll(value: T): Promise<T[]>;
//   abstract getOne(value: T): Promise<T | null>;
//   abstract updateOne(): Promise<number>;
}

export default AbstractODM;