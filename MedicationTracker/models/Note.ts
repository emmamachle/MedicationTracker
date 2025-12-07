import { API_URL } from "@/ipconfig";


export class Note {
    id: number;
    text: string;

    public constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
    }

    static async getAll(): Promise<Note[]> {
        const result = await fetch(`${API_URL}/notes`)
        if (!result.ok) {
            throw new Error("Failed to load note list.")
        }
        const notes: Note[] = await result.json();
        return notes;
    }

    static async getByID(id: any): Promise<Note | undefined> {
        return (await this.getAll()).find(item => item.id === id);
    }

    static async createNew(text: string): Promise<number> {
        // json server should auto increment the id i think
        const maxId = (await Note.getAll()).reduce((max, note) => {
             const idNum = Number(note.id);
             return Number.isNaN(idNum) ? max : Math.max(max, idNum);
         }, 0);
         const id = maxId + 1;
         console.log(id)
        const obj = {
            id: id,
            text: text
        }
        const result = await fetch(`${API_URL}/notes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        })
        const data = await result.json();
        //console.log(await result.text())
        return data.id as number;
    }
}