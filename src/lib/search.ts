import { ParsedJSON } from "../interfaces/json.interface";
import parser from "./parser";

export default function search(query: string, jsonArray: any[]) {
    const fined = query.replaceAll(/[^a-zA-Z0-9]+/g, '');
    const parsedData = parser(jsonArray);
    const results = recursiveSearch(fined, parsedData);
    const result = results.map((result) => {
        const index = jsonArray.findIndex((json) => json === result);
        return jsonArray[index];
    });
    return result;
}


const recursiveSearch = (query: string, args: ParsedJSON[]): ParsedJSON[] => {
    if (args.length == 0) return args;
    if (query.length == 0) return args;
    const results = args.filter((arg) => arg.valueString.includes(query[0]));
    const newQuery = query.slice(1);
    return recursiveSearch(newQuery, results);
}

