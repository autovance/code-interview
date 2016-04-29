## Fee Filter

The goal of this function is to filter fees that would be applied to a vehicle.

We have three attributes in a vehicle:
  1. Model ID
  2. Province ID
  3. Vehicle Type

For the purposes of this test, what each attribute contains doesn't matter,
as long as it is consistent.

The feeFilter function should:
  1. Filter any fees that do not match any of the three attributes
  2. Include any fees that match the attributes
  3. If an attribute is null, it does not count towards the filter

This would mean, if we have vehicle:

```js
vehicle = {
  province_id: 'AB',
  model_id: 1,
  vehicle_type: 'N'
}
```

Then these fees would be included:

```js
fees = [
  {
    vehicle_type: 'N',
    province_id: null,
    model_id: null
  },
  {
    vehicle_type: null,
    province_id: 'AB'
    model_id: null,
  }
]
```

Because one of the attributes matches, and the other two are null, the fees match.

A fee that looked like this would not be included:

```js
fees = [
  {
    vehicle_type: 'N',
    province_id: 'BC',
    model_id: null
  }
]
```

Even though vehicle type matches, province does not, so the fee is not returned.
