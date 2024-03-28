import React,{createContext, useState} from 'react'

export const FavouriteDishesCtx=createContext({
    mealIds: [], // Initial value
    addDishId: () => {}, // Placeholder implementations
    removeDishId: () => {},
})

export default function FavouriteProvider({children}){
    console.log("I have entered provider context")
    const [favDishIds,setFavDishIds]=useState([])
    function addDish(id){
        // console.log(id)
        setFavDishIds((oldDishIds)=>[...oldDishIds,id])
    }
    function removeDish(id){
        // console.log(id)
        setFavDishIds((oldDishIds)=>oldDishIds.filter((oldDishId)=>(oldDishId!=id)))
    }

    const values={
        mealIds:favDishIds,
        addDishId:addDish,
        removeDishId:removeDish

    }
    return (
        <FavouriteDishesCtx.Provider value={values}>{children}</FavouriteDishesCtx.Provider>
    )
    
}
