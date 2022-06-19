//creating Global Store
import { configureStore } from "@reduxjs/toolkit";

// States 
import coreReducer from "./core";
import productReducer from "./products";
import cartReducer from "./carts";

const Store = configureStore({
    reducer: {
        core: coreReducer ,
        products: productReducer,
        carts: cartReducer
    }
})

export default Store;