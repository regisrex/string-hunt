import { describe, expect, it } from 'vitest';
import search from '../src/lib/search';

describe("Search function", () => {
    it("should return a 2 results", () => {
        const query = "Ri";
        const jsonArray = [
            {
                "name": "Regis"
            },
            {
                "name": "Rewis"
            }
        ];

        const results  = search(query, jsonArray.map((o) => JSON.stringify(o)));
        expect(results.length).toEqual(2);
    });

    it("should return a 0 results", () => {
        const query = "R";
        const jsonArray = [
            {
                "name": "Megis"
            },
            {
                "name": "Mewis"
            }
        ];

        const results  = search(query, jsonArray.map((o) => JSON.stringify(o)));
        expect(results.length).toEqual(0);
    });


});