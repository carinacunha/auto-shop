import { Model, models, Schema, model } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected _model: Model<T>;
  protected _modelName: string;
  protected _schema: Schema;

  constructor(schema: Schema, modelName: string) {
    this._schema = schema;
    this._modelName = modelName;
    this._model = models[this._modelName] || model(this._modelName, this._schema);
  }

  async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }
} 