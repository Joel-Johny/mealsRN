import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const CategoryTile = ({ itemData,handleScreenChange }) => {
//   console.log("------------",itemData,"===========")
  return (
      <View style={[styles.buttonWrapper,styles.outerTile,{backgroundColor:itemData.item.color}]}>
        <Pressable android_ripple={{color:"white"}} style={styles.button} onPress={handleScreenChange}>
          <Text style={styles.itemText}>{itemData.item.title}</Text>
        </Pressable>
      </View>
  );
};

export default CategoryTile;
const styles=StyleSheet.create({
    outerTile:{
        margin:18,
        borderWidth:2,
        borderColor:"black",
        width:150,
        height:150,
        borderRadius:25
    },
    buttonWrapper:{
        flex:1,
        overflow:"hidden"
    },
    button:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden"

    },
    itemText:{
        color:"black"
    }
})