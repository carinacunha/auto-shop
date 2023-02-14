import IVehicle from './IVehicle';

export default interface IMotorcycles extends IVehicle{
  category: string,
  engineCapacity: number,
}
