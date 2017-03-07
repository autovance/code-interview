const {expect} = require('chai');

const valueExpand = require('../../../lib/set-1/value-expand');

describe('Validation Set-1:Value Expand', () => {
  const INPUT1 = {
    1: {
      values: {
        36: 0.7
      },
      uuids: {
        finance_rate_id: {
          36: '43378e65-a835-47e0-8577-e24d80d3e2d4'
        },
        trim_id: 'fa6205dd-43e2-4935-ba6f-fdeb7e2f207d'
      }
    },
    2: {
      values: {
        24: 0.4,
        36: 0.8
      },
      uuids: {
        finance_rate_id: {
          24: '2cdd24a2-a5e7-46b1-80d0-776f3dbbbc79',
          36: '1c5e4ab5-8cf4-4eef-8162-e1642056a57b'
        },
        trim_id: '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b'
      }
    },
    10: {
      values: {
        36: 0.9,
        48: 1.2,
        64: 1.6
      },
      uuids: {
        finance_rate_id: {
          36: '29268e5d-70d0-4403-acf0-89b2d3d7d942',
          48: 'fe4b9501-60da-4a8d-81a2-019709b634d8',
          64: 'f468f00e-9962-422a-9096-6e872fd54f5c'
        },
        trim_id: '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b'
      }
    }
  };

  const RESULT1 = {
    1: [{
      values: {
        start_term: '36',
        end_term: '36',
        rate: 0.7
      },
      uuids: {
        finance_rate_id: '43378e65-a835-47e0-8577-e24d80d3e2d4',
        trim_id: 'fa6205dd-43e2-4935-ba6f-fdeb7e2f207d'
      }
    }],
    2: [{
      values: {
        start_term: '24',
        end_term: '24',
        rate: 0.4
      },
      uuids: {
        finance_rate_id: '2cdd24a2-a5e7-46b1-80d0-776f3dbbbc79',
        trim_id: '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b'
      }
    }, {
      values: {
        start_term: '36',
        end_term: '36',
        rate: 0.8
      },
      uuids: {
        finance_rate_id: '1c5e4ab5-8cf4-4eef-8162-e1642056a57b',
        trim_id: '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b'
      }
    }],
    10: [{
      values: {
        start_term: '36',
        end_term: '36',
        rate: 0.9
      },
      uuids: {
        finance_rate_id: '29268e5d-70d0-4403-acf0-89b2d3d7d942',
        trim_id: '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b'
      }
    }, {
      values: {
        start_term: '48',
        end_term: '48',
        rate: 1.2
      },
      uuids: {
        finance_rate_id: 'fe4b9501-60da-4a8d-81a2-019709b634d8',
        trim_id: '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b'
      }
    }, {
      values: {
        start_term: '64',
        end_term: '64',
        rate: 1.6
      },
      uuids: {
        finance_rate_id: 'f468f00e-9962-422a-9096-6e872fd54f5c',
        trim_id: '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b'
      }
    }]
  };

  it('Validation Test: Has correct keys', () => {
    let result = valueExpand(INPUT1);
    let keys = Object.keys(result);
    expect(keys.length).to.equal(3);
    expect(keys).to.eql(['1', '2', '10']);
  });

  it('Validation Test: Has correct output', () => {
    let result = valueExpand(INPUT1);
    expect(result).to.eql(RESULT1);
  });
});
