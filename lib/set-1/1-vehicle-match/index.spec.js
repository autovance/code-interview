const {expect} = require('chai');
const vehicleMatch = require('.');

describe('Set-1: Vehicle Match', () => {
  let vehicles;

  beforeEach(() => {
    vehicles = {
      toyota: {
        rav4: {
          trims: [1]
        },
        camry: {
          trims: [2]
        }
      },
      lexus: {
        rcf: {
          trims: [3, 4]
        },
        rx: {
          trims: [8]
        }
      }
    };
  });

  it('Base Test : Function returns expected keys', () => {
    let vehicle = vehicleMatch(4, vehicles);
    expect(vehicle).to.eql({
      trimId: 4,
      modelId: 'rcf',
      makeId: 'lexus'
    });
  });


  // Write your correctness tests here

});
