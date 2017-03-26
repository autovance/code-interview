const _ = require('lodash');
const when = require('when');
const sinon = require('sinon');
require('sinon-as-promised');

// Complete this function
module.exports = function requestResults() {

  // These stub functions replicate async requests
  let requestOne = sinon.stub().resolves(1);
  let requestTwo = sinon.stub().resolves(2);

  return [];
};
