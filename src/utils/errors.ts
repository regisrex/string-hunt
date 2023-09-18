export class InvalidJSON extends Error {
    constructor(message: string) {
        super(message)
        this.name = "InvalidJSON";
    }
}