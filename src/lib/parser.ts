/**
 *  Full text search algorithm
 *  ----
 *  By [@pacifiquem](https://github.com/pacifiquem) and [@regisrex](https://github.com/regisrex)
*/


import { isArray, isJSON } from "valdie";
import { ParsedJSON } from "../interfaces/json.interface";
import { InvalidJSON } from "../utils/errors";
import { extractKeys, parseObject, indexer } from "../utils/helper";

export default function parser(jsonStrings: string[], keys: string[]): ParsedJSON[] {
  try {
    if (!isArray(jsonStrings)) {
      throw new TypeError(`Expected an array of strings but received ${typeof jsonStrings}`);
    }

    const jsonObjects: Record<string, unknown>[] = jsonStrings.map((jsonString: string) => {
      const parsedString: Record<string, unknown> = JSON.parse(jsonString);
      return parsedString;
    });

    const desiredKeysObject: Record<string, unknown>[] = extractKeys(jsonObjects, keys);

    if (desiredKeysObject.some((obj) => !isJSON(obj))) {
      throw new InvalidJSON("Invalid JSON provided");
    }

    const parsedValuesArr: string[] = desiredKeysObject.map((obj: Record<string, unknown>) => {
      return parseObject(obj);
    });

    return indexer(parsedValuesArr);
  } catch (error: any) {
    throw new InvalidJSON("Invalid JSON provided: " + error.message);
  }
}