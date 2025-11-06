import { Note } from "./Note";

export class Medication {
    id: number;
    name: string;
    notes: Note[];

    public constructor(id: number, name: string, notes: Note[]) {
        this.id = id;
        this.name = name;
        this.notes = notes;
    }
}