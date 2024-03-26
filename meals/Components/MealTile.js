import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

const MealTile = ({ itemData }) => {
//   console.log("------------", itemData, "===========");
  return (
    <View style={styles.outerTile}>
      <Pressable android_ripple={{ color: "red" }} style={styles.button}>
        <Image style={styles.image} source={{ uri: itemData.item.imageUrl }} />
        <Text style={styles.itemText}>{itemData.item.title}</Text>
        <View style={styles.itemGuide}>
          <Text>{itemData.item.duration}m</Text>
          <Text>{itemData.item.affordability}</Text>
          <Text>{itemData.item.complexity}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealTile;
const styles = StyleSheet.create({
  image: {
    height: 250,
    width: "100%",
    borderRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  outerTile: {
    margin: 25,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 25,
    overflow: "hidden", //servers as button wrapper
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 15,
    fontWeight: "bold",
    margin:5
  },
  itemGuide: {
    flexDirection: "row",
    gap: 15,
    marginBottom:5

  },
});
