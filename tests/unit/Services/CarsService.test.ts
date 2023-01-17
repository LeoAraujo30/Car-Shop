import * as sinon from 'sinon';
import * as chai from 'chai';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/CarsService';

const { expect } = chai;
const service = new CarsService();

const mockCar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const mockCarReturn = {
  id: '63c5ab5a83998c6f696b4129',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
  __v: 0,
};

// const mockUptate = {
//   acknowledged: true,
//   modifiedCount: 1,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 1,
// };

describe('Testando a camada Service da rota "/cars"', function () {
  it('Testando a função "addCar"', async function () {
    sinon.stub(Model, 'create').resolves(mockCarReturn);

    const result = await service.addCar(mockCar);

    expect(result.getId()).to.equal(mockCarReturn.id);
    expect(result.getModel()).to.equal(mockCarReturn.model);
    expect(result.getYear()).to.equal(mockCarReturn.year);

    (Model.create as sinon.SinonStub).restore();
  });
  it('Testando a função "getAll"', async function () {
    sinon.stub(Model, 'find').resolves([mockCarReturn, { ...mockCarReturn, color: 'White' }]);

    const result = await service.getAll();

    expect(result[0].getColor()).to.equal('Black');
    expect(result[1].getColor()).to.equal('White');

    (Model.find as sinon.SinonStub).restore();
  });
  it('Testando a função "getOne" com id valido', async function () {
    sinon.stub(Model, 'findById').resolves(mockCarReturn);

    const result = await service.getOne('63c5ab5a83998c6f696b4129');

    if (result) {
      expect(result.getId()).to.equal(mockCarReturn.id);
    }

    (Model.findById as sinon.SinonStub).restore();
  });
  it('Testando a função "getOne" com id invalido', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    
    const result = await service.getOne('63c5ab5a83998c6f6xxxxxxx');

    expect(result).to.equal(null);

    (Model.findById as sinon.SinonStub).restore();
  });
  // it('Testando a função "updateOne" com id valido', async function () {
  //   sinon.stub(Model, 'updateOne').resolves(mockUptate);
    
  //   const result = await service.updateOne('63c5ab5a83998c6f696b4129');

  //   expect(result).to.equal(null);

  //   (Model.findById as sinon.SinonStub).restore();
  // });
});