import { StyleSheet, Text, SafeAreaView,View } from 'react-native';
import Categories from './Screens/Categories';
import Meals from './Screens/Meals';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealDetails from './Screens/MealDetails';

const Stack= createStackNavigator()
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle:{backgroundColor:"rgb(92, 72, 72)"},
          headerTintColor:"white",
          contentStyle:{backgroundColor:"red"},
          headerStyle: { backgroundColor: '#f4511e' }, // Header background
          // contentStyle: { backgroundColor: '#60a5fa' }, // Screen background not working
        
        }}>
          <Stack.Screen name="Categories" component={Categories}
          options={{
            title:"Home-Categories"
          }}
          />
          <Stack.Screen name="Meals" component={Meals}/>
          <Stack.Screen name="MealDetails" component={MealDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth:4,
    borderColor:"green",
    paddingTop:20,
  },
  categoriesContainer:{
    borderWidth:4,
    borderColor:"orange"
}
});
