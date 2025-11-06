import { DisplayMedicationList } from "@/components/display-medication-list";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
      <View>
        <DisplayMedicationList />
        <Link href={{ pathname: "/medication/create" }}>Create new Medication</Link>
        <Link href={{ pathname: "/entry/create" }}>Create new Entry</Link>
      </View>
  );
}
