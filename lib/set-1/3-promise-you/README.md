## Promise You

> We have some functions that require some flow control. Typically, these are used to send requests to other
> services. We need to make sure that all of the information needed is present before we move on.

Create the function to do this, and write tests to ensure it's correct.

### Goals

*   Use the `when` promise library to control the flow of some async functions.
*   Write a function that controls the flow of two other functions, given in the example.
*   The function return a promise that resolves when all of the other functions are complete.
*   Aggregate the results of the functions into an object.

### Example

Given these mock async calls:

```js
  let requestOne = sinon.stub().resolves(1);
  let requestTwo = sinon.stub().resolves(2);
```

Return a function that aggregates the function results:

```js
results = {
  firstRequest: 1
  secondRequest: 2
}
```

The keys of the results doesn't matter, as long as they are consistent.

#### More Info

Do not hesitate to email your interviewer if you have any questions.
