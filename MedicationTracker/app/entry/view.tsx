import { RenderIndividualEntry } from "@/components/render-individual-entry";
import { Entry } from "@/models/Entry";
import { Medication } from "@/models/Medication";
import { Note } from "@/models/Note";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";


export default function ViewEntryScreen() {

    const { id } = useLocalSearchParams<{ id: string }>(); 
    
    const [entry, setEntry] = useState<Entry>();
          
    useEffect(() => {
        console.log("ran use effect")
            Entry.getByID(id).then(setEntry);
    }, [])
    
    // Try to get the entry from the backend
    console.log("view entry screen with id " + id)

    if (entry != undefined && entry != null) {
        return (
        <RenderIndividualEntry entry={entry}  />
        );
    } else {
        // Then the specific entry doesn't exist
        return (
            <View>
                <Text>The requested entry #{ id } could not be found.</Text>
            </View>
        );
    }

}