import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle{
  category: 'Street' | 'Custom' | 'Trail',
  engineCapacity: number,
}
