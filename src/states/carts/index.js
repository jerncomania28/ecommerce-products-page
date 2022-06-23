import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
    addProductsToCart: (state, action) => {
      const cartItems = state.items;
      const product = action.payload;

      const addProduct = (cartItems, product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
          return cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }

        return [...cartItems, { ...product, quantity: 1 }];
      };

      state.items = addProduct(cartItems, product);
    },
  },
});

export const { setCartItems, addProductsToCart } = cartSlice.actions;
export default cartSlice.reducer;
