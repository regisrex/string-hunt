import { isArray, isJSON } from "valdie";
import { ParsedJSON } from "../interfaces/json.interface";
import { InvalidJSON } from "../utils/errors";

interface ParsedObject {
  keys: string[];
  values: string[];
  valueString: string;
}

const parseObject = (obj: Record<string, unknown>, parentKey?: string): ParsedObject => {
  const keys: string[] = [];
  const values: string[] = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const currentKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        const { keys: subKeys, values: subValues } = parseObject(
          obj[key] as Record<string, unknown>,
          currentKey
        );
        keys.push(...subKeys);
        values.push(...subValues);
      } else {
        keys.push(currentKey);
        values.push(String(obj[key]));
      }
    }
  }

  const valueString = values.join("").replace(/\s/g, "");
  return { keys, values, valueString };
};

export default function parser(jsonStrings: string[]): ParsedJSON[] {
  try {
    if (!isArray(jsonStrings)) {
      throw new TypeError(`Expected an array of strings but received ${typeof jsonStrings}`);
    }

    const jsonObjects: Record<string, unknown>[] = jsonStrings.map((jsonString: string) => {
      return JSON.parse(jsonString);
    });

    if (jsonObjects.some((obj) => !isJSON(obj))) {
      throw new InvalidJSON("Invalid JSON provided");
    }

    const parsedValuesArr: ParsedJSON[] = jsonObjects.map((obj: Record<string, unknown>) => {
      const { keys, values, valueString } = parseObject(obj);
      return { keys, values, valueString };
    });

    return parsedValuesArr;
  } catch (error: any) {
    throw new InvalidJSON("Invalid JSON provided: " + error.message);
  }
}