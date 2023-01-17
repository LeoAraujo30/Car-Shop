import * as sinon from 'sinon';
import * as chai from 'chai';
import { Model } from 'mongoose';
import MotorcyclesService from '../../../src/Services/MotorcyclesService';

const { expect } = chai;
const service = new MotorcyclesService();

const mockMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const mockMotorcycleReturn = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
  __v: 0,
};

describe('Testando a camada Service da rota "/motorcycles"', function () {
  it('Testando a função "addMotorcycle"', async function () {
    sinon.stub(Model, 'create').resolves(mockMotorcycleReturn);

    const result = await service.addMotorcycle(mockMotorcycle);

    expect(result.getId()).to.equal(mockMotorcycleReturn.id);
    expect(result.getModel()).to.equal(mockMotorcycleReturn.model);
    expect(result.getYear()).to.equal(mockMotorcycleReturn.year);

    (Model.create as sinon.SinonStub).restore();
  });
  it('Testando a função "getAll"', async function () {
    sinon.stub(Model, 'find').resolves(
      [mockMotorcycleReturn, { ...mockMotorcycleReturn, color: 'White' }],
    );

    const result = await service.getAll();

    expect(result[0].getColor()).to.equal('Yellow');
    expect(result[1].getColor()).to.equal('White');

    (Model.find as sinon.SinonStub).restore();
  });
  it('Testando a função "getOne" com id valido', async function () {
    sinon.stub(Model, 'findById').resolves(mockMotorcycleReturn);

    const result = await service.getOne('63c5ab5a83998c6f696b4129');

    if (result) {
      expect(result.getId()).to.equal(mockMotorcycleReturn.id);
    }

    (Model.findById as sinon.SinonStub).restore();
  });
  it('Testando a função "getOne" com id invalido', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    
    const result = await service.getOne('63c5ab5a83998c6f6xxxxxxx');

    expect(result).to.equal(null);

    (Model.findById as sinon.SinonStub).restore();
  });
});