import parser from "../src/parser";
import { validJsonObject, invalidJsonObject } from "../src/utils/testDATA";
import { ParsedData } from "../src/interfaces/json.interface";


const sample_search_key: string = "Sampleville";

describe("If parser can parser a valid JSON", () => {

    test("For ValidJSON it must return data as ParsedData Interface", () => {

        const validJSON:string = JSON.stringify(validJsonObject);
        const validParsedObject:ParsedData = {
            keys: [
                "name",
                "age",
                "address.street",
                "address.city",
                "address.zipcode",
                "hobbies",
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
            searchKeys: ["S","a","m","p","l","e","v","i","l","l","e"]
        }
        expect(parser(validJSON, sample_search_key)).toEqual(validParsedObject)
    
    });

});

describe("If parser can throw error when given invalid json", () => {
    test("must throw error InvalidJSON", () => {

        const invalidJSON:string = JSON.stringify(invalidJsonObject);
        expect(parser(invalidJSON, sample_search_key)).toThrow("Invalid JSON provided");

    });
});