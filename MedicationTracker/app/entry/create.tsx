import CreateEntryForm from "@/components/create-entry-form";
import { Entry } from "@/models/Entry";
import { Medication } from "@/models/Medication";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { View } from "react-native";


export default function CreateEntryScreen() {
    const [meds, setMeds] = useState<Medication[]>([]);
      
    useEffect(() => {
        console.log("ran use effect")
          Medication.getAll().then(setMeds);
    }, [])

    return (
        <View>
            <CreateEntryForm medications={meds} onSubmit={(medicationId, quantity, ampm) => Entry.createNew(medicationId, quantity, ampm)}/>
        </View>
    );
}