import "react-native-gesture-handler";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import Categories from "./Screens/Categories";
import Meals from "./Screens/Meals";
import Favourites from "./Screens/Favourites";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealDetails from "./Screens/MealDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// import FavouriteProvider from "./store/context";
import { Provider } from "react-redux";
import { Store } from "./store/redux/store";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

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

function BottomNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "rgb(92, 72, 72)" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "red" },
        headerStyle: { backgroundColor: "#f4511e" }, // Header background
        // contentStyle: { backgroundColor: '#60a5fa' }, // Screen background not working
      }}
    >
      <BottomTab.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "Home-Categories",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color="red" />
          ),
        }}
      />
      <BottomTab.Screen
        name="favourites"
        component={Favourites}
        options={{
          title: "Facourites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={24} color="orange" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "rgb(92, 72, 72)" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "red" },
        headerStyle: { backgroundColor: "#f4511e" }, // Header background
        // contentStyle: { backgroundColor: '#60a5fa' }, // Screen background not working
      }}
    >
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "Home-Categories",
        }}
      />
      <Stack.Screen name="Meals" component={Meals} />
      <Stack.Screen name="MealDetails" component={MealDetails} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={Store}>
        {/* <FavouriteProvider> */}
          <NavigationContainer>
            <BottomTab.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "rgb(92, 72, 72)" },
                headerTintColor: "white",
                contentStyle: { backgroundColor: "red" },
                headerStyle: { backgroundColor: "#f4511e" }, // Header background
                // contentStyle: { backgroundColor: '#60a5fa' }, // Screen background not working
              }}
            >
              {/* <Stack.Screen
            name="drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          /> */}
              <BottomTab.Screen
                name="Home"
                component={StackNavigator}
                options={{
                  headerShown: false,
                  tabBarIcon: () => (
                    <Ionicons name="home" size={24} color="red" />
                  ),
                }}
              />
              <BottomTab.Screen
                name="Favorites"
                component={Favourites}
                options={{
                  tabBarIcon: () => (
                    <Ionicons name="star" size={24} color="orange" />
                  ),
                }}
              />
            </BottomTab.Navigator>
          </NavigationContainer>
        {/* </FavouriteProvider> */}
      </Provider>
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
