/**
 *  Full text search algorithm
 *  ----
 *  By [@pacifiquem](https://github.com/pacifiquem) and [@regisrex](https://github.com/regisrex)
*/

export class InvalidJSON extends Error {
    constructor(message: string) {
        super(message)
        this.name = "InvalidJSON";
    }
}