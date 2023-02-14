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
}