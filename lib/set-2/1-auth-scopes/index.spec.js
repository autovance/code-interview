const {expect} = require('chai');
const findScopes = require('.');

describe('Set-1: Auth Scopes', () => {
  let scopes;
  let roles;
  let users;

  beforeEach(() => {

    scopes = [
      {id: 1, name: 'login'},
      {id: 2, name: 'update'},
      {id: 3, name: 'delete'}
    ];

    roles = {
      global: {scopes: [scopes[0].id, scopes[1].id, scopes[2].id]},
      user: {scopes: [scopes[0].id]},
      admin: {scopes: [scopes[0].id, scopes[2].id]}
    };

    users = {
      userOne: {scopes: [1, 2]}
    };

  });


  it('Base Test : Function returns populated array', () => {
    let result = findScopes(users.userOne, roles, scopes);
    expect(result.length).to.be.above(0);
  });


  // Write your correctness tests here

});
