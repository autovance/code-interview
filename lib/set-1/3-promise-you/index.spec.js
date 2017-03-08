/* eslint no-unused-expressions:0 */
const {expect} = require('chai');
const requestResults = require('.');

describe('Set-1: Value Expand', () => {

  beforeEach(() => {});

  it('Base Test : Ensure object is not empty', () => {

    return requestResults().then(results => {
      expect(results).to.not.be.empty;
    });

  });

  // Write your correctness tests here

});
