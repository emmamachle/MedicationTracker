import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

type Props = {
  initial?: { name: string; notes: string[] };
  onSubmit: (name: string, notes: string[]) => void;
};

export function CreateMedicationForm({ initial, onSubmit }: Props) {

  const [name, setName] = useState(initial?.name ?? '');
  const [notes, setNotes] = useState<string[]>(initial?.notes ?? ['']);

  const addNote = () => setNotes((prev) => [...prev, '']);
  const updateNote = (index: number, text: string) =>
    setNotes((prev) => prev.map((n, i) => (i === index ? text : n)));
  const removeNote = (index: number) =>
    setNotes((prev) => prev.filter((_, i) => i !== index));

  const submit = () => {
    console.log("Performing onSubmit()");
    onSubmit(name, notes);
  };

  return (
    <View>
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} />

      <Text>Notes</Text>
      <Button title="Add note" onPress={addNote} />

      <View>
        {notes.map((n, i) => (
          <View key={i}>
            <TextInput
              value={n}
              onChangeText={(t) => updateNote(i, t)}
              multiline
            />
            <Button title="Remove" onPress={() => removeNote(i)} />
          </View>
        ))}
      </View>

      <Button title="Save" onPress={submit} />
    </View>
  );
}
