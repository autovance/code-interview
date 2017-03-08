const _ = require('lodash');
const when = require('when');

// Complete this function
module.exports = function requestResults() {

  function requestOne() {
    sleep(100);
    return 1;
  }

  function requestTwo() {
    sleep(200);
    return 2;
  }

  return {};
};
