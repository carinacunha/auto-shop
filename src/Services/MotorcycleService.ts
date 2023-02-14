import Motorcycles from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
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

  public async listAll() {
    const motors = await this._model.findAll();
    return motors.map((motor) => this.createMotorDomain(motor));
  }

  public async findById(id: string) {
    const motor = await this._model.findById(id);
    if (motor === undefined) return { status: 422, message: 'Invalid mongo id' };
    if (!motor) return { status: 404, message: 'Motorcycle not found' };
    const listedMotor = this.createMotorDomain(motor);
    return { status: 200, motor: listedMotor };
  }

  public async updateById(id: string, data: IMotorcycle) {
    const updatedMotor = await this._model.update(id, data);
    if (updatedMotor === undefined) return { status: 422, message: 'Invalid mongo id' };
    if (!updatedMotor) return { status: 404, message: 'Motorcycle not found' };
    const motor = this.createMotorDomain(updatedMotor);
    return { status: 200, updatedMotor: motor };
  }
}