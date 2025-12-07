import { useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";

type Props = {
  initial?: { name: string; notes: string[] };
  onSubmit: (name: string, notes: string[]) => void;
};

export function CreateMedicationForm({ initial, onSubmit }: Props) {
  const router = useRouter()
  const [name, setName] = useState(initial?.name ?? "");
  const [notes, setNotes] = useState<string[]>(initial?.notes ?? [""]);

  const addNote = () => setNotes((prev) => [...prev, ""]);
  const updateNote = (index: number, text: string) =>
    setNotes((prev) => prev.map((n, i) => (i === index ? text : n)));
  const removeNote = (index: number) =>
    setNotes((prev) => prev.filter((_, i) => i !== index));

  const submit = () => {
    onSubmit(name, notes);
    router.replace("/")
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Create Medication
        </Text>

        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="e.g. Ibuprofen"
            placeholderTextColor="#c08aa7"
            style={styles.input}
          />
        </View>

        <View style={styles.notesHeader}>
          <Text style={styles.label}>Notes</Text>
          <Pressable onPress={addNote} style={styles.addNoteButton}>
            <Text style={styles.addNoteButtonText}>+ Add note</Text>
          </Pressable>
        </View>

        <View style={styles.notesList}>
          {notes.map((n, i) => (
            <View key={i} style={styles.noteItem}>
              <TextInput
                value={n}
                onChangeText={(t) => updateNote(i, t)}
                multiline
                placeholder="Optional note"
                placeholderTextColor="#c08aa7"
                style={styles.noteInput}
              />
              {notes.length > 1 && (
                <Pressable
                  onPress={() => removeNote(i)}
                  style={styles.removeNoteButton}
                >
                  <Text style={styles.removeNoteButtonText}>Remove</Text>
                </Pressable>
              )}
            </View>
          ))}
        </View>

        {/* Save button */}
        <Pressable onPress={submit} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>
            Save Medication
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff0fa", // soft pink background to match index/entry pages
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#ffe4f6", // light pink card
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ff69b4", // hot pink border
    shadowColor: "#ff1493",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#ff1493",
    marginBottom: 20,
    textAlign: "center",
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#b03060",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ffb6d9",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    fontSize: 16,
    color: "#333333",
  },
  notesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 8,
  },
  addNoteButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#ff1493",
    backgroundColor: "#ffffff",
  },
  addNoteButtonText: {
    color: "#ff1493",
    fontWeight: "700",
    fontSize: 14,
  },
  notesList: {
    gap: 10,
    marginBottom: 16,
  },
  noteItem: {
    borderWidth: 1,
    borderColor: "#ffb6d9",
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#fff9fd",
  },
  noteInput: {
    minHeight: 60,
    fontSize: 14,
    color: "#333333",
    textAlignVertical: "top",
  },
  removeNoteButton: {
    alignSelf: "flex-end",
    marginTop: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "transparent",
  },
  removeNoteButtonText: {
    color: "#b03060",
    fontWeight: "600",
    fontSize: 12,
  },
  saveButton: {
    marginTop: 8,
    backgroundColor: "#ff1493",
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#ff1493",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  saveButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },
});

