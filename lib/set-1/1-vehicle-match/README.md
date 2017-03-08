## Vehicle Match

> Our customers know too little! All they know is what base level trim they want,
> but they can't remember the make or model of the vehicle. No matter, its a good thing
> each trim is unique!

Create the function to do this, and write tests to ensure it's correct.

### Goals

*   The goal of the function is to return an object describing the ID's that relate to the trim.
*   Each object should have the attributes `trimId`, `modelId` and `makeId` included.
*   You can assume that a `trimId` will be unique within the entire tree.

### Example:


Given an Id of `1`, and a vehicle tree like:

```js
makes = {
  toyota: {
    rav4: {
      trims:[
        1
      ]
    },
    ...
  },
  ...
}
```

You should output an object like:

```js
{
  makeId: "Toyota",
  modelId: "Rav4",
  trimId: "1"
}
```

#### More Info

Do not hesitate to email your interviewer if you have any questions.
