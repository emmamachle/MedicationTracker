import { API_URL } from "@/ipconfig";
import { Medication } from "./Medication";
import { Note } from "./Note";


export class Entry {
    id: number;
    medication?: Medication;
    ampm: string;
    quantity: string;

    public constructor(id: number, medication: Medication, ampm: string, quantity: string) {
        this.id = id;
        this.medication = medication;
        this.ampm = ampm;
        this.quantity = quantity;
    }

    // Static class methods for reading and writing and deleting

    static async getAll(): Promise<Entry[]> {
        const result = await fetch(`${API_URL}/entries`)
        if (!result.ok) {
            throw new Error("Failed to load entry list.")
        }
        const entries: Entry[] = await result.json();
        for (const entry of entries) {
            //console.log(entry.id, entry.medication, entry.ampm, entry.quantity);
            const idkman = await Medication.getByID(entry.medication);
            entry.medication = idkman;
        }
        return entries;
    }

    static async getByID(id: any): Promise<Entry | undefined> {
        id = String(id)
        return (await this.getAll()).find(item => item.id === id);
    }

    static async deleteByID(id: any): Promise<void> {

        const result = await fetch(`${API_URL}/entries/${id}`, { method: "DELETE" });
        console.log("DELETE URL:", `${API_URL}/entries/${id}`);
        if(!result.ok) {
            throw new Error(`failed to delete entry: ${result.status}`);
        }
    }

    static async createNew(medicationId: any, quantity: string, ampm: string): Promise<void> {
        console.log(`Called with arguments: ${medicationId} and ${ampm} and ${quantity}`)
        const obj = {
            medication: medicationId,
            ampm: ampm,
            quantity: quantity
        }
        const result = await fetch(`${API_URL}/entries`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        })
        if (!result.ok) {
            throw new Error("Failed to add new entry.")
        }
    }
}
