import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Components/Cart'

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        //user:...
    }
})