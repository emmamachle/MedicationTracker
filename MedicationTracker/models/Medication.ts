import { API_URL } from "@/ipconfig";
import { Entry } from "./Entry";
import { Note } from "./Note";

export class Medication {
    id: number;
    name: string;
    notes?: Note[];

    public constructor(id: number, name: string, notes?: Note[]) {
        this.id = id;
        this.name = name;
        this.notes = notes ?? [];
    }

    // Static class methods for reading

    static async getAll(): Promise<Medication[]> {
        console.log("called get all medication")
        const result = await fetch(`${API_URL}/medications`)
        if (!result.ok) {
            throw new Error("Failed to load medication list.")
        }
        const meds: Medication[] = await result.json();
        for (const med of meds) {
            //console.log(entry.id, entry.medication, entry.ampm, entry.quantity);
            const notes = med.notes
            const hurrdurr: Note[] = [];
            if (notes) {
                for (const n of notes) {
                const idkman = await Note.getByID(n);
                if (idkman) {
                    hurrdurr.push(idkman)
                }
            }
            }
            med.notes = hurrdurr;
        }
        return meds;
    }

    static async getByID(id: any): Promise<Medication | undefined> {
        const med = (await this.getAll()).find(item => item.id === id);
        return med;
    }

    static async createNew(name: string, notes: string[]): Promise<void> {
        // the notes are passed as text and need to be created from here
        console.log(`Called with arguments: ${name} and ${notes}`)
        const noteids: number[] = [];
        for (const note of notes) {
            noteids.push(await Note.createNew(note));
        }
        const obj = {
            name: name,
            notes: noteids
        }
        console.log(obj)
        const result = await fetch(`${API_URL}/medications`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        })
        if (!result.ok) {
            throw new Error("Failed to add new medication.")
        }
    }
}
