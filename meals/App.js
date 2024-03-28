import "react-native-gesture-handler";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import Categories from "./Screens/Categories";
import Meals from "./Screens/Meals";
import Favourites from "./Screens/Favourites";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealDetails from "./Screens/MealDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "rgb(92, 72, 72)" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "red" },
        headerStyle: { backgroundColor: "#f4511e" }, // Header background
        // contentStyle: { backgroundColor: '#60a5fa' }, // Screen background not working
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "Home-Categories",
        }}
      />
      <Drawer.Screen name="favourites" component={Favourites} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="Meals" component={Meals} />
          <Stack.Screen name="MealDetails" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 4,
    borderColor: "green",
    paddingTop: 20,
  },
  categoriesContainer: {
    borderWidth: 4,
    borderColor: "orange",
  },
});
