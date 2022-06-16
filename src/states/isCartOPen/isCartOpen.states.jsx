import { createSlice } from "@reduxjs/toolkit";


const isCartOpen = createSlice({
    name: "isCartOpen",
    initialState: { value: { isCartOpen: false } },
    reducers: {
        setIsCartOpen: (state, action) => {
            state.value.isCartOpen = action.payload;
        }
    }
})

export const { setIsCartOpen } = isCartOpen.actions;

export default isCartOpen.reducer;