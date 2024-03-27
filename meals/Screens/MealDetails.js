import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from "react-native";
import { MEALS } from "../data/dummy";

const MealDetails = ({ route }) => {
  const mealId = route.params.data;
  const mealDetails = MEALS.find((meal) => {
    if (meal.id === mealId) return meal;
  });
  console.log(mealDetails, mealId);
  const ingredients = mealDetails.ingredients;
  const steps = mealDetails.steps;
  const title = mealDetails.title;
  return (
    <ScrollView>
      <Image source={{ uri: mealDetails.imageUrl }} style={styles.image} />
      <Text style={styles.mealName}>Meal Name {title}</Text>
      <Text style={styles.heading}>Ingredients</Text>
      <View style={styles.listStyle}>
        {ingredients.map((ingredient, index) => (
          <View style={styles.listTextContianer} key={index}>
            <Text style={styles.listTextStyle}>
            #{index + 1} - {ingredient}
            </Text>
          </View>
        ))}
      </View>
      <Text style={styles.heading}>Steps</Text>
      <View style={styles.listStyle}>
        {steps.map((step, index) => (
          <View style={styles.listTextContianer} key={index}>
            <Text key={index} style={styles.listTextStyle}>
            #{index + 1} - {step}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealDetails;
const styles = StyleSheet.create({
  image: {
    height: 250,
    width: "100%",
    borderRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  mealName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  heading: {
    borderColor: "red",
    backgroundColor: "#f4511e",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    fontSize: 18,
    padding: 10,
    fontStyle: "italic",
    textAlign: "center",
    color: "white",
  },
  listStyle: {
    gap: 10,
    padding: 10,
  },
  listTextStyle: {
    color:"red",
    fontSize:15
  },
  listTextContianer:{
    margin:5,
    paddingHorizontal:20,
    paddingVertical:10,
    borderColor:"red",
    borderWidth:2,
    borderRadius:8,
    backgroundColor:"pink"

  }
});
