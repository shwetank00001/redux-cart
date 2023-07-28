import { configureStore } from "@reduxjs/toolkit";  // to store the global state object
import cartSlice from "./cartSlice"; 

const store = configureStore({
    reducer:{
        cart: cartSlice
    }
})


export default store