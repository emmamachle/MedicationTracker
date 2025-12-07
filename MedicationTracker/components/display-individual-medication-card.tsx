import { Entry } from "@/models/Entry";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, router, useRouter } from "expo-router";
import { View, Pressable, Text, StyleSheet } from "react-native";

type Props = {
    med: Entry;
}

export default function DisplayIndividualMedicationCard ({med}: Props) {

    const router = useRouter();

    return (
        <View style={styles.card}>

        <View key={med.id} style={{ marginBottom: 12 }}>
        <Text style={styles.name}>{med.medication?.name}</Text>

        <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>{med.ampm}</Text>
            <Text style={styles.metaValue}>{med.quantity}</Text>
        </View>

        <View style={styles.actionsRow}>
            <Link href={{ pathname: "/entry/view", params: { id: med.id } }} asChild>

            <Pressable style={styles.iconButton}>
            <MaterialCommunityIcons
              name="eye"
              size={24}
              color="#ff1493"
            />
            </Pressable>
            </Link>

            

            <Pressable
            onPress={() => {
                Entry.deleteByID(med.id);
                router.replace("/");
            }}
            style={styles.iconButton}
            >
            <MaterialCommunityIcons
                name="trash-can"
                size={24}
                color="#f0e130"
            />
            </Pressable>
        </View>
        </View>
        </View>

    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffe4f6", // very light pink
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ff69b4", // hot pink border
    shadowColor: "#ff1493",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ff1493",
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  metaLabel: {
    fontWeight: "600",
    color: "#b03060",
    marginRight: 4,
  },
  metaValue: {
    color: "#333333",
  },
  actionsRow: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-between",
  },
  iconButton: {
    padding: 8,
    borderRadius: 999,
    backgroundColor: "#ffffffaa", // soft white bubble
  },
});