## Auth Scopes

> We need to make sure our users do not have permissions that they should not have. We can do this
> by assigning constant scopes to their role, which relate to permissions in different areas of the
> applications.

Create the function to do this, and write tests to ensure it's correct.

### Goals

*   We need a function that takes a user_id, and returns an array of their scopes (one, or more). 
*   If the user does not exist, we can throw an error
*   If the user does not have any scopes, we can return an empty array

You can assume that each scope in the list has a unique value.

### Example

Given these roles:

```js
  
  let scopes = {
    login: 1,
    delete: 2,
    update: 3
  };

  let roles = {
    global: {scopes: [scopes.login, scopes.delete, scopes.update]},
    user: {scopes: [scopes.login]},
    admin: {scopes: [scopes.login, scopes.update]}
  };

  let users = {
    userOne: {scopes: [1, 3]}
  };
```

The function should return an array representing their scopes:

```js
[
  'login',
  'update'
]
```

#### More Info

Do not hesitate to email your interviewer if you have any questions.
