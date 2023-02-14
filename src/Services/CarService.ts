import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/carODM';

export default class CarService {
  constructor(private _model = new CarODM()) {}
  public createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const newCar = await this._model.create(car);
    return this.createCarDomain(newCar);
  }

  public async listAll() {
    const cars = await this._model.findAll();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async findById(id: string) {
    const car = await this._model.findById(id);
    if (car === undefined) return { status: 422, message: 'Invalid mongo id' };
    if (!car) return { status: 404, message: 'Car not found' };
    const listedCar = this.createCarDomain(car);
    return { status: 200, car: listedCar };
  }

  public async updateById(id: string, data: ICar) {
    const updatedCar = await this._model.update(id, data);
    if (updatedCar === undefined) return { status: 422, message: 'Invalid mongo id' };
    if (!updatedCar) return { status: 404, message: 'Car not found' };
    const car = this.createCarDomain(updatedCar);
    return { status: 200, updatedCar: car };
  }
}
