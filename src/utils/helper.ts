import { ParsedJSON } from "../interfaces/json.interface";

export const extractKeys = (objects: Record<string, unknown>[], keys: string[]): Record<string, unknown>[] => {
    const result: Record<string, unknown>[] = [];
  
    for (const object of objects) {
      const extractedObject: Record<string, unknown> = {};
  
      for (const key of keys) {
        if (key in object) {
          extractedObject[key] = object[key];
        }
      }
  
      result.push(extractedObject);
    }
  
    return result;
  };
  
export  const indexer = (parsedStringArr: string[]): ParsedJSON[] => {
    return parsedStringArr.map((parsedString, index) => ({
      index,
      value: parsedString,
    }));
};
  
export  const parseObject = (obj: Record<string, unknown>, parentKey?: string): string => {
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
  
    return combinedValue.replace(/\s/g, "").toLowerCase(); // remove any space and then return.
  };