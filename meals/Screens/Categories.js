import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy";
import CategoryTile from "../Components/CategoryTile";




const Categories = ({ navigation }) => {

//   console.log("Rendering categories page here is the navigation object", navigation);

  function renderCategoryItem(itemData) {
    // console.log("Rendering items", navigation);

    function handleScreenChange() {
    //   console.log("Pressed and this is navigation object", navigation);
      navigation.navigate("Meals",{id:itemData.item.id});
    }

    return (
      <CategoryTile
        itemData={itemData}
        handleScreenChange={handleScreenChange}
      />
    );
  }

  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={CATEGORIES}
          renderItem={(itemData) => renderCategoryItem(itemData, navigation)}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesContainer: {
    borderWidth: 4,
    borderColor: "orange",
  },
  flatListContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
});
