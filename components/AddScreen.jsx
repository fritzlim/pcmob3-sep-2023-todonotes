import { View, Text, Pressable } from "react-native";

function AddScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the add screen</Text>
      <Pressable onPress={() => navigation.goBack()} style={{ padding: 10 }}>
        <Text style={{ color: "orange" }}>Dismiss</Text>
      </Pressable>
    </View>
  );
}

export default AddScreen;
