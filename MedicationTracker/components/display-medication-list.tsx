import { Entry } from "@/models/Entry";
import { Medication } from "@/models/Medication";
import { Note } from "@/models/Note";
import { View } from "react-native";
import { Link } from "expo-router";

/** 
 * Render code to display the full list of the user's medications.
 * Can be used with database data (production), or fake data can be defined
 * in this function for testing purposes.
*/
export function DisplayMedicationList() {
    let meds = Entry.getAll();
    return (
        <View>
            <div>
                <h2>All Medications</h2>
                <ul>
                    { meds.map(m => (
                        <li key={ m.id }>{ m.medication.name }
                        <br></br>
                        <span>{ m.ampm }</span>
                        <br></br>
                        <span>{ m.quantity }</span>
                        <br></br>
                        <span><Link href={{ pathname: "/entry/view", params: { id: m.id } }}>View</Link></span>
                        <span>Edit</span>
                        <span>Delete</span>
                        </li>
                    ))}
                </ul>
            </div>
        </View>
    );
}