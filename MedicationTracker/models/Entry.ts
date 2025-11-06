import { Medication } from "./Medication";
import { Note } from "./Note";

export class Entry {
    id: number;
    medication: Medication;
    ampm: string;
    quantity: string;

    public constructor(id: number, medication: Medication, ampm: string, quantity: string) {
        this.id = id;
        this.medication = medication;
        this.ampm = ampm;
        this.quantity = quantity;
    }

    // Static class methods for reading

    static getAll(): Entry[] {
        // Fake entry data
        // Will be replaced with a real database call.
        return meds;
    }

    static getByID(id: number): Entry | undefined {
        // Fake entry data
        // Will be replaced by a real database call.
        return meds.find(item => item.id === id);
    }
}

// Fake data for testing
    var fakemedication = new Medication(1, "Losartan", [new Note(1, "Take with food")]);
    let meds = [
        new Entry(1, fakemedication, "AM", "10 pills"),
        new Entry(2, fakemedication, "PM", "15 mL"),
    ];