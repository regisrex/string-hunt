import { isArray, isJSON } from "valdie";
import { ParsedJSON } from "../interfaces/json.interface";
import { InvalidJSON } from "../utils/errors";

const indexer = (parsedStringArr: string[]): ParsedJSON[] => {
  return parsedStringArr.map((parsedString, index) => ({
    index,
    value: parsedString,
  }));
};

const parseObject = (obj: Record<string, unknown>, parentKey?: string): string => {
  const values: string[] = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const currentKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        const subValues = parseObject(obj[key] as Record<string, unknown>, currentKey);
        values.push(...subValues);
      } else {
        values.push(String(obj[key]));
      }
    }
  }

  // Combine all values with their keys
  const combinedValue = values.join("");

  return combinedValue.replace(/\s/g, ""); // remove any space and then return.
};

export default function parser(jsonStrings: string[]): ParsedJSON[] {
  try {
    if (!isArray(jsonStrings)) {
      throw new TypeError(`Expected an array of strings but received ${typeof jsonStrings}`);
    }

    const jsonObjects: Record<string, unknown>[] = jsonStrings.map((jsonString: string) => {
      const parsedString: Record<string, unknown> = JSON.parse(jsonString);
      return parsedString;
    });

    if (jsonObjects.some((obj) => !isJSON(obj))) {
      throw new InvalidJSON("Invalid JSON provided");
    }

    const parsedValuesArr: string[] = jsonObjects.map((obj: Record<string, unknown>) => {
      return parseObject(obj);
    });

    return indexer(parsedValuesArr);
  } catch (error: any) {
    throw new InvalidJSON("Invalid JSON provided: " + error.message);
  }
}