import { Medication } from "./Medication";

export class Entry {
    medication: Medication;
    ampm: string;
    quantity: number;

    public constructor(medication: Medication, ampm: string, quantity: number) {
        this.medication = medication;
        this.ampm = ampm;
        this.quantity = quantity;
    }
}