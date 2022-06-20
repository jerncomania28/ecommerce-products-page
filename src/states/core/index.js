import {createSlice} from '@reduxjs/toolkit';

const coreSlice = createSlice({
  name: "core",
  initialState: { 
    iconMenu: false,
    isCartOpen: false 
  },
  reducers: {
    setIconMenu: (state, action) => {
      state.iconMenu = action.payload;
    },
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    }
  }
})

export const {
  setIconMenu,
  setIsCartOpen
} = coreSlice.actions;
export default coreSlice.reducer;