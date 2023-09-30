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
  index: 0,
  value: "alice28123mainsts9am0pl8evi9ll8e12345readingswimminggardeningtrue"
},
{
  index: 1,
  value: "alice28123mainsts9am0pl8evi9ll8e12345readingswimminggardeningtrue"
}];