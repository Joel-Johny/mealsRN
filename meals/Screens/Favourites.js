import React, { useContext } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { FavouriteDishesCtx } from "../store/context";
import { MEALS } from "../data/dummy";
import MealTile from "../Components/MealTile";
const Favourites = () => {
  const favoriteMealsCtx = useContext(FavouriteDishesCtx);
  const favMealIds = favoriteMealsCtx.mealIds;
  const myFavouriteMeals = MEALS.filter((meal) => {
    return favMealIds.includes(meal.id);
  });
  // console.log(myFavouriteMeals);
  const handleMealItemRender = (mealItemData) => {
    return <MealTile itemData={mealItemData} />;
  };
  return (
    <View>
      {favMealIds.length == 0 ? (
        <Text>Sorry no Favorite Dishes Add one Now!</Text>
      ) : (
        <FlatList
          data={myFavouriteMeals}
          keyExtractor={(mealItem) => mealItem.id}
          renderItem={handleMealItemRender}
        />
      )}
    </View>
  );
};

export default Favourites;
