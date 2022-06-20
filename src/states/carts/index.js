import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { 
      items: [] 
    },
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload;
        }
    }
})

export const { setCartItems } = cartSlice.actions;  
export default cartSlice.reducer;