import { extractKeys } from '../src/utils/helper'; // Import the extractKeys function from your implementation file
import { validJsonObject } from '../src/utils/testDATA'; // Import the test data
import { describe, it, expect } from 'vitest';

describe('extractKeys Function', () => {
  it('should extract specified keys from objects and return an array of objects', () => {
    const keysToExtract = ['name', 'age', 'address', 'isActive'];

    const extractedObjects = extractKeys(validJsonObject, keysToExtract);

    const expectedResults = [
      {
        "name": "Alice",
        "age": 28,
        "address": {
          "street": "123 Main St",
          "city": "S9am0pl8evi9ll8e",
          "zipcode": "12345"
        },
        "isActive": true
      },
      {
        "name": "Alice",
        "age": 28,
        "address": {
          "street": "123 Main St",
          "city": "S9am0pl8evi9ll8e",
          "zipcode": "12345"
        },
        "isActive": true
      }
    ];

    // Compare the actual results with the expected results
    expect(extractedObjects).toEqual(expectedResults);
  });

  it('should return an array of empty objects if no keys are specified', () => {

    const keysToExtract:any[] = [];
    const extractedObjects = extractKeys(validJsonObject, keysToExtract);

    // The result should be an empty array since no keys are specified
    expect(extractedObjects).toEqual([{}, {}]);
  });

  it('should return an empty array if no objects are provided', () => {
    const objects: any[] = [];
    const keysToExtract = ['name', 'age', 'address', 'isActive'];
    const extractedObjects = extractKeys(objects, keysToExtract);

    // The result should be an empty array since there are no objects to extract keys from
    expect(extractedObjects).toEqual([]);
  });

  it('should return an empty object if no keys match in any object', () => {
    const keysToExtract = ['email', 'phone'];
    const extractedObjects = extractKeys(validJsonObject, keysToExtract);

    // The result should be an empty object since there are no matching keys
    expect(extractedObjects).toEqual([{}, {}]);
  });
});