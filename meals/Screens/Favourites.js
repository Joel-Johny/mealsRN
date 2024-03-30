import React, { useContext } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
// import { FavouriteDishesCtx } from "../store/context";
import {useSelector } from "react-redux";
import { MEALS } from "../data/dummy";
import MealTile from "../Components/MealTile";
const Favourites = () => {
  // const favoriteMealsCtx = useContext(FavouriteDishesCtx);
  // const favMealIds = favoriteMealsCtx.mealIds;

  const favMealIds=useSelector((store)=>store.favourite.mealIds)
  const myFavouriteMeals = MEALS.filter((meal) => {
    return favMealIds.includes(meal.id);
  });
  console.log(favMealIds);
  const handleMealItemRender = (mealItemData) => {
    return <MealTile itemData={mealItemData} />;
  };
  return (
    <View style={{flex:1}}>
      {favMealIds.length == 0 ? (
        <View style={{ justifyContent: "center", alignItems: "center",flex:1}}>
          <Text>Sorry no Favorite Dishes Add one Now!</Text>
        </View>
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
