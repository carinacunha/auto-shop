import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number; 

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue }: IVehicle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
  }
}