import React from 'react'
import { StyleSheet, Text, SafeAreaView,View,FlatList } from 'react-native';
import { MEALS } from '../data/dummy';
import MealTile from '../Components/MealTile';
const Meals = ({route}) => {
    const catId=route.params.id
    const categoryMeals=MEALS.filter((meal)=>{
        // if(meal.categoryIds.indexOf(catId)>=0)
        //     return meal or

        return meal.categoryIds.indexOf(catId)>=0
        // give condition only if true meal will e returned else nothing

    })
    const handleMealItemRender=(mealItemData)=>{
        return <MealTile itemData={mealItemData}/>
    }
  return (
    <View>
        <Text>Screen 2 meals Category Id {catId}</Text>
        <FlatList data={categoryMeals} keyExtractor={(mealItem)=>mealItem.id} renderItem={handleMealItemRender}/>
    </View>
  )
}

export default Meals