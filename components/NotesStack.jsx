import { createStackNavigator } from "@react-navigation/stack";
import NotesScreen from "./NotesScreen";

const InnerStack = createStackNavigator();

function NotesStack() {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          headerTitle: "Notes App",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
          },
          headerStyle: {
            height: 120,
            backgroundColor: "yellow",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          },
        }}
      />
    </InnerStack.Navigator>
  );
}

export default NotesStack;
