import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycle';

export default class MotorcyclesODM {
  public schema: Schema; 
  public model: Model<IMotorcycles>;

  constructor() {
    this.schema = new Schema<IMotorcycles>({ 
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycles || model('Motorcycles', this.schema);
  }

  public async create(motor: IMotorcycles): Promise<IMotorcycles> {
    return this.model.create({ ...motor });
  }
}