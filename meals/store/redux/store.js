import { configureStore } from "@reduxjs/toolkit"
import favouriteSlice from "./favouriteSlice"

export const Store = configureStore({
   reducer:{
    //anySliceName:importedSlice
    favourite:favouriteSlice
   }
})