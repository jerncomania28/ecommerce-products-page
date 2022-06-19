import { createSlice } from "@reduxjs/toolkit";


const CartItems = createSlice({
    name: "cart-items",
    initialState: { value: { cartItems: [] } },
    reducers: {
        setCartItems: (state, action) => {
            state.value.cartItems = action.payload;
        }
    }
})

export const { setCartItems } = CartItems.actions;

export default CartItems.reducer;