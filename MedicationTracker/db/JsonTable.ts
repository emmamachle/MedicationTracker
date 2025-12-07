import FileSystem from "expo-file-system";

export class JsonTable<T extends { id: string }> {
  private fileUri: string;

  constructor(filename: string) {
    this.fileUri = FileSystem.do + filename;
  }

  private async ensureFile(): Promise<void> {
    const info = await FileSystem.getInfoAsync(this.fileUri);
    if (!info.exists) {
      await FileSystem.writeAsStringAsync(this.fileUri, "[]"); // start as empty array
    }
  }

  private async readAll(): Promise<T[]> {
    await this.ensureFile();
    const content = await FileSystem.readAsStringAsync(this.fileUri);
    if (!content.trim()) return [];
    return JSON.parse(content) as T[];
  }

  private async writeAll(items: T[]): Promise<void> {
    const json = JSON.stringify(items, null, 2);
    await FileSystem.writeAsStringAsync(this.fileUri, json);
  }

  // CRUD-ish helpers

  async getAll(): Promise<T[]> {
    return this.readAll();
  }

  async getById(id: string): Promise<T | undefined> {
    const items = await this.readAll();
    return items.find((i) => i.id === id);
  }

  async insert(item: T): Promise<T> {
    const items = await this.readAll();
    items.push(item);
    await this.writeAll(items);
    return item;
  }

  async update(id: string, partial: Partial<T>): Promise<T | undefined> {
    const items = await this.readAll();
    const index = items.findIndex((i) => i.id === id);
    if (index === -1) return undefined;

    const updated = { ...items[index], ...partial };
    items[index] = updated;
    await this.writeAll(items);
    return updated;
  }

  async remove(id: string): Promise<void> {
    const items = await this.readAll();
    const filtered = items.filter((i) => i.id !== id);
    await this.writeAll(filtered);
  }
}
