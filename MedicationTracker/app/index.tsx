import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import DisplayMedicationList from "../components/display-medication-list";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Medications</Text>

      <View style={styles.buttonRow}>
        <Link
          href={{ pathname: "/medication/create" }}
          asChild
        >
          <Pressable style={[styles.button, styles.buttonHotPink]}>
            <Text style={styles.buttonOutlineText}>+ Medication</Text>
          </Pressable>
        </Link>

        <Link
          href={{ pathname: "/entry/create" }}
          asChild
        >
          <Pressable style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>+ Entry</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.listContainer}>
        <DisplayMedicationList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff0fa", // soft light pink background
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 20,
    textAlign: "center",
    color: "#ff1493",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    shadowColor: "#ff1493",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    minWidth: 140,
    alignItems: "center",
  },

  buttonHotPink: {
    backgroundColor: "#ff1493",
  },

  buttonHotPinkText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },

  buttonOutline: {
    borderWidth: 2,
    borderColor: "#ff1493",
    backgroundColor: "#ffffff",
  },

  buttonOutlineText: {
    color: "#ff1493",
    fontWeight: "700",
    fontSize: 16,
  },

  listContainer: {
    marginTop: 10,
  },
});

