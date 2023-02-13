import { RequestHandler } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  constructor(private _serviceCar = new CarService()) {}

  public create: RequestHandler = async (req, res) => {
    const newCar = await this._serviceCar.create(req.body);
    return res.status(201).json(newCar);
  };
}