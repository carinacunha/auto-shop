import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/carODM';

export default class CarService {
  constructor(private _model = new CarODM()) {}
  private createCarDomain(car: ICar | null): Car | null {
    return new Car(car as ICar);
  }

  public async create(car: ICar) {
    const newCar = await this._model.create(car);
    return this.createCarDomain(newCar);
  }
}
