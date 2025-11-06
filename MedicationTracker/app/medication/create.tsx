import { CreateMedicationForm } from "@/components/create-medication-form";
import { Medication } from "@/models/Medication";
import { View, Text } from "react-native";

export default function CreateMedicationScreen() {
    return (
        <View>
            <CreateMedicationForm onSubmit={(name, notes) => Medication.createNew(name, notes)} />
        </View>
    );
}