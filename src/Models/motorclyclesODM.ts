import { Schema } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycles';
import AbstractODM from './AbstractODM';

export default class MotorcyclesODM extends AbstractODM<IMotorcycles> {
  constructor() {
    const schemaMotorcycle = new Schema<IMotorcycles>({ 
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schemaMotorcycle, 'motorcycles');
  }
}