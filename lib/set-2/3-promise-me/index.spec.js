/* eslint no-unused-expressions:0 */
const {expect} = require('chai');
const requestResults = require('.');

describe('Set-2: Promise Me', () => {

  beforeEach(() => {});

  it('Base Test : Ensure array is not empty', () => {

    return requestResults().then(results => {
      expect(results).to.not.be.empty;
    });

  });

  // Write your correctness tests here

});
