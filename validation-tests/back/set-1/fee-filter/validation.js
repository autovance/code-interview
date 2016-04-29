import {expect} from 'chai';

import feeFilter from '../../../../lib/back/set-1/fee-filter';

describe('Validation Set-1:Fee Filter', () => {
  const include = [{
    province_id: null,
    vehicle_type: null,
    model_id: null
  }, {
    province_id: 'AB',
    vehicle_type: null,
    model_id: null
  }, {
    province_id: 'AB',
    vehicle_type: null,
    model_id: 1
  }, {
    province_id: 'AB',
    vehicle_type: 'C',
    model_id: null
  }, {
    province_id: null,
    vehicle_type: 'C',
    model_id: null
  }, {
    province_id: null,
    vehicle_type: 'C',
    model_id: 1
  }, {
    province_id: null,
    vehicle_type: null,
    model_id: 1
  }, {
    province_id: 'AB',
    vehicle_type: 'C',
    model_id: 1
  }];

  const exclude = [{
    province_id: 'BC',
    vehicle_type: null,
    model_id: null
  }, {
    province_id: 'BC',
    vehicle_type: null,
    model_id: 1
  }, {
    province_id: 'AB',
    vehicle_type: 'N',
    model_id: null
  }, {
    province_id: null,
    vehicle_type: 'N',
    model_id: null
  }, {
    province_id: null,
    vehicle_type: 'C',
    model_id: 2
  }, {
    province_id: null,
    vehicle_type: null,
    model_id: 2
  }, {
    province_id: 'BC',
    vehicle_type: 'C',
    model_id: 2
  }, {
    province_id: 'AB',
    vehicle_type: 'C',
    model_id: 2
  }, {
    province_id: 'BC',
    vehicle_type: 'C',
    model_id: 1
  }, {
    province_id: 'AB',
    vehicle_type: 'N',
    model_id: 1
  }];

  const fees = [...include, ...exclude];

  const vehicle = {
    vehicle_type: 'C',
    province_id: 'AB',
    model_id: 1
  };

  it('Validation Test: Correct Length', () => {
    let result = feeFilter(fees, vehicle);
    expect(result.length).to.equal(include.length);
  });

  it('Validation Test: Correct Inclusion - Province', () => {
    let result = feeFilter(fees, vehicle);
    expect(result.length).to.be.above(0);
    result.map(fee => {
      expect(fee.province_id).to.be.oneOf([null, 'AB']);
    });
  });

  it('Validation Test: Correct Inclusion - Model', () => {
    let result = feeFilter(fees, vehicle);
    expect(result.length).to.be.above(0);
    result.map(fee => {
      expect(fee.model_id).to.be.oneOf([null, 1]);
    });
  });

  it('Validation Test: Correct Inclusion - Vehicle Type', () => {
    let result = feeFilter(fees, vehicle);
    expect(result.length).to.be.above(0);
    result.map(fee => {
      expect(fee.vehicle_type).to.be.oneOf([null, 'C']);
    });
  });
});
