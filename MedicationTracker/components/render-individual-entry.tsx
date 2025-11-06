import { Entry } from "@/models/Entry";
import { View, Text } from "react-native";

type ImDesperate = {
    entry: Entry;
}

export function RenderIndividualEntry({entry}: ImDesperate) {
    console.log("bruh");
  return (
    <View>
      <Text>Entry #{entry.id}</Text>
      <Text>Medication: {entry.medication.name}</Text>
      <Text>
        Instructions: Take {entry.quantity} in the {entry.ampm === 'AM' ? 'morning' : entry.ampm === 'PM' ? 'evening' : ''}.
      </Text>
      {entry.medication.notes?.map(n => (
        <Text key={n.id}>
            • {n.text}
        </Text>
        ))}
    </View>
  );
};