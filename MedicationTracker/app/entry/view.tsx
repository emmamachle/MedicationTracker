import { RenderIndividualEntry } from "@/components/render-individual-entry";
import { Entry } from "@/models/Entry";
import { Medication } from "@/models/Medication";
import { Note } from "@/models/Note";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";


export default function ViewEntryScreen() {

    const { id } = useLocalSearchParams<{ id: string }>();  
    
    // Try to get the entry from the backend
    var e = Entry.getByID(parseInt(id));

    if (e != undefined) {
        console.log("displaying entry");
        console.log(e.id);
        console.log(e.medication.name);
        return (
        <RenderIndividualEntry entry={e}  />
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