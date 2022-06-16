//creating Global Store
import { configureStore } from "@reduxjs/toolkit";

// States 
import isCartOpen from "./isCartOPen/isCartOpen.states";
import Products from "./products/product.states";
import CartItems from "./cartitems /cartItems.states";
import IconMenu from "./IconMenu/IconMenu.states";


const Store = configureStore({
    reducer: {
        cartOpen: isCartOpen,
        products: Products,
        cartItems: CartItems,
        menuOpen: IconMenu,
    }
})


export default Store;