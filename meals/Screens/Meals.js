import React, { useEffect, useLayoutEffect } from 'react'
import { StyleSheet, Text, SafeAreaView,View,FlatList, Button } from 'react-native';
import { MEALS } from '../data/dummy';
import MealTile from '../Components/MealTile';
const Meals = ({route,navigation}) => {
    const catId=route.params.data.id
    const categoryMeals=MEALS.filter((meal)=>{
        // if(meal.categoryIds.indexOf(catId)>=0)
        //     return meal or

        return meal.categoryIds.indexOf(catId)>=0
        // give condition only if true meal will e returned else nothing

    })
    // console.log(route.params)

    useLayoutEffect(()=>{
      navigation.setOptions({
        title:route.params.data.title
      })
    },[])
  
    const handleMealItemRender=(mealItemData)=>{
        return <MealTile itemData={mealItemData}/>
    }
  return (
    <View>
        <Text>Screen 2 meals Category Id {catId}</Text>
        <FlatList data={categoryMeals} keyExtractor={(mealItem)=>mealItem.id} renderItem={handleMealItemRender}/>
        {/* <Button title='openDrawer' onPress={()=>navigation.toggleDrawer()}/> will work only if meals are registered under drawer navigator*/}
    </View>
  )
}

export default Meals