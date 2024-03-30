import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favoritesofJoel",
  initialState: {
    mealIds: ["m1"],
  },
  reducers: {
    addFavourite: (state, action) => {
      console.log("---------------------------")
      console.log("inside add",state,"Id to add",action.payload)
      state.mealIds.push(action.payload);
    },
    removeFavourite: (state, action) => {
      console.log("---------------------------")

      console.log("inside remove states variable",state,"Id to remove",action.payload)
      const newState=JSON.parse(JSON.stringify(state))
      console.log("was not able to return new state")
      state.mealIds.splice(state.mealIds.indexOf(action.payload), 1);
    },
  },
});

export const {addFavourite,removeFavourite}=favouriteSlice.actions
export default favouriteSlice.reducer;
