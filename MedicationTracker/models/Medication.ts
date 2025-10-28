import { Note } from "./Note";

export class Medication {
    name: string;
    notes: Note[];

    public constructor(name: string, notes: Note[]) {
        this.name = name;
        this.notes = notes;
    }
}