import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schemaCar = new Schema<ICar>({
      model: String,
      year: Number,
      color: String,
      status: Boolean,
      buyValue: Number, 
      doorsQty: Number,
      seatsQty: Number,
    }, { versionKey: false });
    super(schemaCar, 'cars');
  }
}