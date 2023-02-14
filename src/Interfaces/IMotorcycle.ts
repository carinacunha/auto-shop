import IVehicle from './IVehicle';

export default interface IMotorcycles extends IVehicle{
  category: 'Street' | 'Custom' | 'Trail',
  engineCapacity: number,
}
