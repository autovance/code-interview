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
  
  let scopes = [
    {id: 1, name: 'login'},
    {id: 2, name: 'update'},
    {id: 3, name: 'delete'}
  ];

  let roles = {
    global: {scopes: [scopes[0].id, scopes[1].id, scopes[2].id]},
    user: {scopes: [scopes[0].id]},
    admin: {scopes: [scopes[0].id, scopes[2].id]}
  };

  let users = {
    userOne: {scopes: [1, 2]}
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
