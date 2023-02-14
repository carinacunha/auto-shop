import { RequestHandler } from 'express';
// import { isValidObjectId } from 'mongoose';
import MotorcyclesService from '../Services/CarService';
// import IMotorcycles from '../Interfaces/IMotorcycles';

export default class MotorcyclesController {
  constructor(private _serviceMotor = new MotorcyclesService()) {}

  public create: RequestHandler = async (req, res) => {
    const newMotor = await this._serviceMotor.create(req.body);
    return res.status(201).json(newMotor);
  };
}