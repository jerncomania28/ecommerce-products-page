import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT_DATA } from "../../data";


const Products = createSlice({
    name: "product",
    initialState: { value: PRODUCT_DATA },
    reducers: {
        setProducts: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setProducts } = Products.actions;

export default Products.reducer;