import { Entry } from "@/models/Entry";
import { Medication } from "@/models/Medication";
import { Note } from "@/models/Note";
import { View, Text, Pressable, ListRenderItemInfo, FlatList, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import DisplayIndividualMedicationCard from "./display-individual-medication-card";
import { useEffect, useState } from "react";

/** 
 * Render code to display the full list of the user's medications.
 * Can be used with database data (production), or fake data can be defined
 * in this function for testing purposes.
*/
export default function DisplayMedicationList() {
    const [meds, setMeds] = useState<Entry[]>([]);
    const router = useRouter();

    useEffect(() => {
        Entry.getAll().then(setMeds);
    }, [])

    const renderItem = ({item,index}: ListRenderItemInfo<Entry>) =>{

        return (
            <DisplayIndividualMedicationCard
                med={ item  }
            />
        )
    }

    return (
        <View style={[styles.container]}>
            <FlatList<Entry>
                data={meds}
                keyExtractor={(_,i) => String(i)}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.listContent}
                />
        </View>
    )
    

}


    const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    listContent: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    item: {
        marginVertical: 6,
    },
    separator: {
        height: 0,
    },
    })
