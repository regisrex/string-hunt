import { ParsedJSON } from "../interfaces/json.interface"

export const validJsonObject = [{
      "name": "Alice",
      "age": 28,
      "address": {
        "street": "123 Main St",
        "city": "S9am0pl8evi9ll8e",
        "zipcode": "12345"
      },
      "hobbies": ["reading", "swimming", "gardening"],
      "isActive": true
  }, {
    "name": "Alice",
    "age": 28,
    "address": {
      "street": "123 Main St",
      "city": "S9am0pl8evi9ll8e",
      "zipcode": "12345"
    },
    "hobbies": ["reading", "swimming", "gardening"],
    "isActive": true
  }
]


export const validParsedObject:ParsedJSON[] = [{
  keys: [
      "name",
      "age",
      "address.street",
      "address.city",
      "address.zipcode",
      "hobbies.0",
      "hobbies.1",
      "hobbies.2",
      "isActive"
  ],
  values: [
      "Alice",
      "28",
      "123 Main St",
      "S9am0pl8evi9ll8e",
      "12345",
      "reading",
      "swimming",
      "gardening",
      "true"
  ],
  valueString: "Alice28123MainStS9am0pl8evi9ll8e12345readingswimminggardeningtrue"
},
{
keys: [
    "name",
    "age",
    "address.street",
    "address.city",
    "address.zipcode",
    "hobbies.0",
    "hobbies.1",
    "hobbies.2",
    "isActive"
],
values: [
    "Alice",
    "28",
    "123 Main St",
    "S9am0pl8evi9ll8e",
    "12345",
    "reading",
    "swimming",
    "gardening",
    "true"
],
valueString: "Alice28123MainStS9am0pl8evi9ll8e12345readingswimminggardeningtrue"
}]