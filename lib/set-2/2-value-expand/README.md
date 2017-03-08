## Value Expand

> We've received rate updates for some of our vehicles!
> Unfortunately the rates are all combined into one object. We need to separate them
> into object representing each rate so we can use them.

Create the function to do this, and write tests to ensure it's correct.

### Goals

*   The goal of this function is to expand each object value into an object array with each rate.
*   Each object in the array will have set the keys `start_term` and `end_term` value to the value key, and set the key `rate` to it's value.
*   You will get a constant string called `idAttribute` which will contain the UUID for each rate. You must match the rate to the corresponding UUID.

### Example

Environment:
```js
const idAttribute = 'finance_rate_id';
```

Take a JSON input of:

```json
{
  "1": {
    "values": {
      "24": 0.6,
      "36": 0.8
    },
    "uuids": {
      "finance_rate_id": {
        "24": "af309368-1fc3-49be-ae0f-9db6166c95f4",
        "36": "5aa7053f-555a-4a37-a5a2-699eac7f13e8"
      },
      "trim_id": "7ae37904-7b46-4f04-a4b6-906e0b0a6ed3"
    }
  }
}
```

Would output:

```json
{
  "1": [
    {
      "values": {
        "start_term": "24",
        "end_term": "24",
        "rate": 0.6
      },
      "uuids": {
        "finance_rate_id": "af309368-1fc3-49be-ae0f-9db6166c95f4",
        "trim_id": "7ae37904-7b46-4f04-a4b6-906e0b0a6ed3"
      }
    },
    {
      "values": {
        "start_term": "36",
        "end_term": "36",
        "rate": 0.8
      },
      "uuids": {
        "finance_rate_id": "5aa7053f-555a-4a37-a5a2-699eac7f13e8",
        "trim_id": "7ae37904-7b46-4f04-a4b6-906e0b0a6ed3"
      }
    }
  ]
}
```

#### More Info

Do not hesitate to email your interviewer if you have any questions.
