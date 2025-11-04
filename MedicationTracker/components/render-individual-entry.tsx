import { Entry } from "@/models/Entry";
import { View, Text } from "react-native";


const RenderIndividualEntry = (e: Entry) => {

        return (
            <View>
                <Text>Entry #{ e.id }</Text>
                <br></br>
                <Text>Medication: { e.medication.name }</Text>
                <br></br>
                <Text>Instructions: Take { e.quantity } in the { e.ampm === 'AM' ? 'morning' : e.ampm === 'PM' ? 'evening' : ''}.</Text>
                <br></br>
                <ul>
                    
                </ul>
            </View>
        );

    }

export default RenderIndividualEntry;