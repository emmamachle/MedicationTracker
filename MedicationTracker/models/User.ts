import { Entry } from "./Entry";

export class User {
    name: string;
    medications: Entry[];

    public constructor(name: string, medications: Entry[]) {
        this.name = name;
        this.medications = medications;
    }
}