import { Entry } from "@/models/Entry";
import { View, Text, StyleSheet } from "react-native";

type ImDesperate = {
  entry: Entry;
};

export function RenderIndividualEntry({ entry }: ImDesperate) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.entryLabel}>Entry</Text>
        <Text style={styles.entryId}>#{entry.id}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Medication</Text>
          <Text style={styles.sectionValue}>{entry.medication.name}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Instructions</Text>
          <Text style={styles.sectionValue}>
            Take {entry.quantity} in the{" "}
            <Text style={styles.ampmPill}>
              {entry.ampm === "AM"
                ? "morning"
                : entry.ampm === "PM"
                ? "evening"
                : entry.ampm}
            </Text>
            .
          </Text>
        </View>

        {entry.medication.notes && entry.medication.notes.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Notes</Text>
            {entry.medication.notes.map((n) => (
              <View key={n.id} style={styles.noteRow}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.noteText}>{n.text}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff0fa", // soft pink background
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
  entryLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#b03060",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  entryId: {
    fontSize: 24,
    fontWeight: "800",
    color: "#ff1493",
    marginBottom: 16,
  },
  section: {
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#b03060",
    marginBottom: 4,
  },
  sectionValue: {
    fontSize: 16,
    color: "#333333",
  },
  ampmPill: {
    fontWeight: "700",
    color: "#ff1493",
  },
  noteRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 4,
  },
  bullet: {
    marginRight: 6,
    color: "#ff1493",
    fontSize: 14,
    lineHeight: 20,
  },
  noteText: {
    flex: 1,
    fontSize: 14,
    color: "#333333",
    lineHeight: 20,
  },
});
