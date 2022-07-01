import { createSlice } from "@reduxjs/toolkit";

const coreSlice = createSlice({
  name: "core",
  initialState: {
    iconMenu: false,
    isCartOpen: false,
    isLoggedIn: false,
    isProfileOpen: false,
  },
  reducers: {
    setIconMenu: (state, action) => {
      state.iconMenu = action.payload;
    },
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setIsProfileOpen: (state, action) => {
      state.isProfileOpen = action.payload;
    },
  },
});

export const { setIconMenu, setIsCartOpen, setIsLoggedIn, setIsProfileOpen } =
  coreSlice.actions;
export default coreSlice.reducer;
