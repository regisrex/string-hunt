import { isJSON } from "valdie";
import { ParsedJSON } from "../interfaces/json.interface";
import { InvalidJSON } from "../utils/errors";

export default function parser(jsonString: string): ParsedJSON {
  try {
    console.log(jsonString);
    const jsonData = JSON.parse(jsonString);

    if (!isJSON(jsonData)) {
      throw new InvalidJSON("Invalid JSON provided");
    }

    const keys: string[] = [];
    const values: string[] = [];

    const parseObject = (obj: Record<string, unknown>) => {
      for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          keys.push(key);
          parseObject(obj[key] as Record<string, unknown>);
        } else {
          keys.push(key);
          values.push(String(obj[key]));
        }
      }
    };

    parseObject(jsonData);

    console.log(keys, values);
    const valueString = values.join("").replace(/\s/g, "");
    console.log("Value String",valueString);
    return { keys, values, valueString };
  } catch (error: any) {
    throw new InvalidJSON("Invalid JSON provided: " + error.message);
  }
}
