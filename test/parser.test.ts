import { describe, expect, it } from 'vitest';
import parser from "../src/lib/parser";
import { InvalidJSON } from '../src/utils/errors';
import { validJsonObject } from "../src/utils/testDATA";
import { validParsedObject } from '../src/utils/testDATA';

describe("Parser Function", () => {
    it("should return a parsed json", () => {

        const validJSONs: string[] = validJsonObject.map((obj) => {
          return JSON.stringify(obj);
        })
        expect(parser(validJSONs)).toEqual(validParsedObject)
    
    });

    it('should include the error message for invalid JSON', () => {
        const invalidJsonString = ['invalid-json', 'invalid-json2']; // Provide an invalid JSON string
    
        try {
          parser(invalidJsonString);
        } catch (error: any) {
          expect(error).toBeInstanceOf(InvalidJSON);
          expect(error.message).toContain('Invalid JSON provided');
        }
      });

});