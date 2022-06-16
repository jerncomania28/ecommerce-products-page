import { createSlice } from "@reduxjs/toolkit";


const IconMenu = createSlice({
    name: "IconMenu",
    initialState: { value: { iconMenu: false } },
    reducers: {
        setIconMenu: (state, action) => {
            state.value.iconMenu = action.payload;
        }
    }
})

export const { setIconMenu } = IconMenu.actions;

export default IconMenu.reducer;