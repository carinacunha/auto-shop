import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Should do manipulation in the database ', function () {
  afterEach(sinon.restore);
  it('should successfully create a car ', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput: ICar = {
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'create').resolves(carOutput);
    
    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('should successfully find all car ', async function () {
    const cars: ICar[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];

    sinon.stub(Model, 'find').resolves(cars);
    
    const service = new CarService();
    const result = await service.listAll();

    expect(result).to.be.deep.equal(cars);
  });

  it('should successfully find car by Id', async function () {
    const car: ICar = {
      id: '6377b6483915b707f5fddc78',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    const validID = '6377b6483915b707f5fddc78';

    sinon.stub(Model, 'findById').resolves(car);
    
    const service = new CarService();
    const result = await service.findById(validID);

    expect(result).to.be.deep.equal({ status: 200, car });
  });

  it('should unssuccessfully to find car by invalid id', async function () {
    const invalidID = '6377b6483915b707f5fddgsvdod';
    const response = { status: 422, message: 'Invalid mongo id' };
    sinon.stub(Model, 'findById').resolves(response);
    
    const service = new CarService();
    const result = await service.findById(invalidID);

    expect(result).to.be.deep.equal(response);
  });
});