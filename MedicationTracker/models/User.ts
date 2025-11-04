import { Entry } from "./Entry";

export class User {
    id: number;
    name: string;
    medications: Entry[];

    public constructor(id: number, name: string, medications: Entry[]) {
        this.id = id;
        this.name = name;
        this.medications = medications;
    }
}