import { describe, expect, it } from 'vitest';
import { ParsedJSON } from "../src/interfaces/json.interface";
import parser from "../src/lib/parser";
import { InvalidJSON } from '../src/utils/errors';
import { validJsonObject } from "../src/utils/testDATA";

describe("Parser Function", () => {
    it("should return a parsed json", () => {

        const validJSON:string = JSON.stringify(validJsonObject);
        const validParsedObject:ParsedJSON = {
            keys: [
                "name",
                "age",
                "address",
                "street",
                "city",
                "zipcode",
                "hobbies",
                "0",
                "1",
                "2",
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
        }
        expect(parser(validJSON)).toEqual(validParsedObject)
    
    });

    it('should include the error message for invalid JSON', () => {
        const invalidJsonString = 'invalid-json'; // Provide an invalid JSON string
    
        try {
          parser(invalidJsonString);
        } catch (error: any) {
          expect(error).toBeInstanceOf(InvalidJSON);
          expect(error.message).toContain('Invalid JSON provided');
        }
      });

});