import IVehicle from './IVehicle';

export default interface ICar extends IVehicle{
  doorsQty: number,
  seatsQty: number,
}
