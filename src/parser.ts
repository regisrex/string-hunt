import { isJSON } from "valdie";
import { InvalidJSON } from "./utils/errors";
import { ParsedData } from "./interfaces/json.interface";

export default  parser = (jsonString: string, searchKey: string): ParsedData => {

    const jsonData = JSON.parse(jsonString); // parse json data provided

    // parse provided json string if it's valid JSON
    if (isJSON(jsonData)) {

        const searchKeyArr:string[] = searchKey.split(""); // split searchKey to get array of characters
        const dataKeys:string[] = Object.keys(jsonData); // extract all key from json provided
        const dataValues: string[] = Object.values(jsonData); // extract all values from json provided

        return {
            keys: dataKeys,
            values: dataValues,
            searchKeys: searchKeyArr
        }

    }else {
        throw new InvalidJSON("Invalid JSON provided")
    }
}