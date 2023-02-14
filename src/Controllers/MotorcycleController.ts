import { RequestHandler } from 'express';
// import { isValidObjectId } from 'mongoose';
import MotorcycleService from '../Services/MotorcycleService';
// import IMotorcycles from '../Interfaces/IMotorcycles';

export default class MotorcyclesController {
  constructor(private _serviceMotor = new MotorcycleService()) {}

  public create: RequestHandler = async (req, res) => {
    const newMotor = await this._serviceMotor.create(req.body);
    return res.status(201).json(newMotor);
  };

  public getAll: RequestHandler = async (_req, res) => {
    const motors = await this._serviceMotor.listAll();
    return res.status(200).json(motors);
  };

  public getById: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { status, message, motor } = await this._serviceMotor.findById(id);
    if (motor) return res.status(status).json(motor);
    return res.status(status).json({ message });
  };

  public updateById: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const { status, message, updatedMotor } = await this._serviceMotor.updateById(id, body);
    if (updatedMotor) {
      return res.status(status).json(updatedMotor);
    } return res.status(status).json({ message });
  };
}