import { Model, models, Schema, model, isValidObjectId, UpdateQuery } from 'mongoose';

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

  async findAll(): Promise<T[]> {
    return this._model.find();
  }
  
  async findById(id:string):Promise<T | null | undefined> {
    if (!isValidObjectId(id)) return undefined;
    return this._model.findById({ _id: id }, { __v: 0 });
  }

  public async update(id: string, data: Partial<T>): Promise<T | null | undefined > {
    if (!isValidObjectId(id)) return undefined;
    return this._model.findByIdAndUpdate({ _id: id }, { ...data } as UpdateQuery<T>, { new: true });
  }
} 