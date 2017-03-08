const {expect} = require('chai');
const findScopes = require('.');

describe('Set-1: Fee Filter', () => {
  let scopes;
  let roles;
  let users;

  beforeEach(() => {

    scopes = {
      login: 1,
      delete: 2,
      update: 3
    };

    roles = {
      global: {scopes: [scopes.login, scopes.delete, scopes.update]},
      user: {scopes: [scopes.login]},
      admin: {scopes: [scopes.login, scopes.update]}
    };

    users = {
      userOne: {scopes: [1, 3]}
    };

  });


  it('Base Test : Function returns populated array', () => {
    let result = findScopes(users.userOne, roles, scopes);
    expect(result.length).to.be.above(0);
  });


  // Write your correctness tests here

});
