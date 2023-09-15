export const validJsonObject = {
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

export const invalidJsonObject = {
        "name": "Alice",
        "age": 28,
        "address": {
          "street": "123 Main St",
          "city": "Sampleville",
          "zipcode": "12345"
        },
        "hobbies": ["reading", "swimming", "gardening"],
        "isActive": true,
        "unterminatedString": "This string is not properly terminated,
        "missingComma": ["item1" "item2"],
        "invalidValue": NaN
}