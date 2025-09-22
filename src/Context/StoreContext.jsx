import React, { createContext, useReducer, useState } from 'react'
import { food_list } from '../assets/frontend_assets/assets'

 export const StoreContext = createContext(null)



const StoreProvider = ({ children }) => {

  const [cartItem,setCartItem] =useState({});

  const addToCart=(ItemId)=>{
    if(!cartItem[ItemId]){
      setCartItem((prev)=>({...prev,[ItemId]:1}))
    }else{
      setCartItem((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
    }
  }
  const removeToCart=(ItemId)=>{
      setCartItem((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
  }

  const contextValue={
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeToCart
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
