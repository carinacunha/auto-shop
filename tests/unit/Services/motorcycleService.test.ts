import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorService from '../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const MODELNAME = 'Honda Cb 600f Hornet';

describe('Should do manipulation in the database ', function () {
  afterEach(sinon.restore);
  it('should successfully create a Motor ', async function () {
    const motorInput: IMotorcycle = {
      model: MODELNAME,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const motorOutput: IMotorcycle = {
      id: '6348513f34c397abcad040b2',
      model: MODELNAME,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'create').resolves(motorOutput);
    
    const service = new MotorService();
    const result = await service.create(motorInput);

    expect(result).to.be.deep.equal(motorOutput);
  });

  it('should successfully find all Motor ', async function () {
    const motors: IMotorcycle[] = [
      {
        id: '6348513f34c397abcad040b2',
        model: MODELNAME,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
    ];

    sinon.stub(Model, 'find').resolves(motors);
    
    const service = new MotorService();
    const result = await service.listAll();

    expect(result).to.be.deep.equal(motors);
  });

  it('should successfully find Motor by Id', async function () {
    const motor: IMotorcycle = {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const validID = '6377b6483915b707f5fddc78';

    sinon.stub(Model, 'findById').resolves(motor);
    
    const service = new MotorService();
    const result = await service.findById(validID);

    expect(result).to.be.deep.equal({ status: 200, motor });
  });

  it('should unssuccessfully to find Motor by invalid id', async function () {
    const invalidID = '6377b6483915b707f5fddgsvdod';
    const response = { status: 422, message: 'Invalid mongo id' };
    sinon.stub(Model, 'findOne').resolves(response);
    
    const service = new MotorService();
    const result = await service.findById(invalidID);

    expect(result).to.be.deep.equal(response);
  });

  it('should successfully update', async function () {
    const id = '63ebc94ef85213ebcbb9ea02';
    const body: IMotorcycle = {
      model: 'Honda Cb 600f',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const output: IMotorcycle = {
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb 600f',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findByIdAndUpdate').resolves(output);
    
    const service = new MotorService();
    const result = await service.updateById(id, body);

    expect(result.updatedMotor).contains(output);
  });
});