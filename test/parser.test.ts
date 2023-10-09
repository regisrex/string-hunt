/**
 *  Full text search algorithm
 *  ----
 *  By [@pacifiquem](https://github.com/pacifiquem) and [@regisrex](https://github.com/regisrex)
*/


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
        const keys: string[] = [ 'name', 'age', 'address', 'hobbies', 'isActive' ];
        expect(parser(validJSONs, keys)).toEqual(validParsedObject)
    
    });

    it("should return a parsed json even when there are no keys specified", () => {

      const validJSONs: string[] = validJsonObject.map((obj) => {
        return JSON.stringify(obj);
      })
      expect(parser(validJSONs)).toEqual(validParsedObject)
  
  });

    it('should include the error message for invalid JSON', () => {
        const invalidJsonString = ['invalid-json', 'invalid-json2']; // Provide an invalid JSON string
        const keys: string[] = [ 'name', 'age', 'address', 'hobbies', 'isActive' ];
    
        try {
          parser(invalidJsonString, keys);
        } catch (error: any) {
          expect(error).toBeInstanceOf(InvalidJSON);
          expect(error.message).toContain('Invalid JSON provided');
        }
      });

});