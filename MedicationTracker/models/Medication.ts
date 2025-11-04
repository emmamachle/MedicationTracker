import { Note } from "./Note";

export class Medication {
    id: number;
    name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}