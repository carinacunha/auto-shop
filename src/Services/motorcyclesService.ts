import Motorcycles from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/motorclyclesODM';

export default class MotorcyclesService {
  constructor(private _model = new MotorcyclesODM()) {}
  public createMotorDomain(motor: IMotorcycles | null): Motorcycles | null {
    if (motor) {
      return new Motorcycles(motor);
    }
    return null;
  }

  public async create(motor: IMotorcycles) {
    const newMotor = await this._model.create(motor);
    return this.createMotorDomain(newMotor);
  }
}