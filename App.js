import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SQLite from "expo-sqlite";
import NotesStack from "./components/NotesStack";
import AddScreen from "./components/AddScreen";

const db = SQLite.openDatabase("notes.db");

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* **** Without using 2 groups of screens. **** */}
      {/* <Stack.Navigator
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        <Stack.Screen
          name="Notes Stack"
          component={NotesStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add Note" component={AddScreen} />
      </Stack.Navigator> */}
      {/* ********************************************** */}
      {/* **** Using 2 groups of screens. **** */}
      {/* See https://reactnavigation.org/docs/modal/#creating-a-stack-with-modal-screens */}
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Notes Stack"
            component={NotesStack}
            options={{ headerShown: false }}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{ presentation: "modal", headerShown: false }}
        >
          <Stack.Screen
            name="Add Note"
            component={AddScreen}
            // options={{ presentation: "modal", headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
      {/* ************************************* */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffc",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
