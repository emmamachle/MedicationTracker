import { SetStateAction, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Medication } from "@/models/Medication";
import { router, useRouter } from "expo-router";

type Props = {
  medications?: Medication[];
  onSubmit?: (
    medicationId: string,
    quantity: string,
    ampm: "AM" | "PM",
  ) => void;
};

/**
 * Returns the form to be used to create a new entry in the medication tracker.
 * Does NOT handle the logic for creation.
 */
export default function CreateEntryForm({ medications, onSubmit }: Props) {
  const router = useRouter()
  console.log("rendering form")
  const [meds, setMeds] = useState<Medication[]>([]);

  console.log(medications)
  const [selectedMedicationId, setSelectedMedicationId] = useState(
    Medication.id ?? ""
  );
  const [ampm, setAmpm] = useState<"AM" | "PM">("AM");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
        console.log("ran use effect")
          Medication.getAll().then(setMeds);
    }, [])

  const handleSubmit = () => {
    console.log("called handle submit")
    if (!onSubmit) {
      return;
    }
    onSubmit(
      String(selectedMedicationId),
      quantity,
      ampm,
    );

    router.replace("/")
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Create New Entry</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Medication</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedMedicationId}
              onValueChange={(value: SetStateAction<number>) => setSelectedMedicationId(value)}
              style={styles.picker}
            >
              {medications.map((m) => (
                <Picker.Item
                  key={m.id}
                  label={m.name}
                  value={m.id}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Time of Day</Text>
          <View style={styles.toggleGroup}>
            {(["AM", "PM"] as const).map((value) => {
              const active = ampm === value;
              return (
                <Pressable
                  key={value}
                  onPress={() => setAmpm(value)}
                  style={[
                    styles.toggleButton,
                    active && styles.toggleButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.toggleButtonText,
                      active && styles.toggleButtonTextActive,
                    ]}
                  >
                    {value}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Quantity</Text>
          <TextInput
            value={quantity}
            onChangeText={setQuantity}
            placeholder="e.g. 1, 2, 0.5"
            placeholderTextColor="#c08aa7"
            // keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <Pressable onPress={handleSubmit} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Entry</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff0fa",
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#ffe4f6",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ff69b4",
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
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#b03060",
    marginBottom: 6,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ffb6d9",
    borderRadius: 12,
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  picker: {
    height: 52,
    color: "#333333",
  },
  toggleGroup: {
    flexDirection: "row",
    gap: 10,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#ffb6d9",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  toggleButtonActive: {
    backgroundColor: "#ff1493",
    borderColor: "#ff1493",
  },
  toggleButtonText: {
    fontWeight: "700",
    color: "#b03060",
  },
  toggleButtonTextActive: {
    color: "#ffffff",
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
