import { StyleSheet, Text, SafeAreaView,View } from 'react-native';
import Categories from './Screens/Categories';
import Meals from './Screens/Meals';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack= createStackNavigator()
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={Categories}/>
          <Stack.Screen name="Meals" component={Meals}/>
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
    backgroundColor:"black"
  },
  categoriesContainer:{
    borderWidth:4,
    borderColor:"orange"
}
});
