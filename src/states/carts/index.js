import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
    total: 0,
  },
  reducers: {
    cartTotal: (state) => {
      const cartItems = state.items;

      const total = cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);

      state.total = total;
    },
    cartCount: (state) => {
      const cartItems = state.items;

      const count = cartItems.reduce((acc, item) => {
        return acc + 1;
      }, 0);

      state.count = count;
    },

    deleteProductFromCart: (state, action) => {
      const cartItems = state.items;
      const product = action.payload;

      const deleteProduct = (cartItems, product) => {
        return cartItems.filter((item) => item.id !== product.id);
      };

      state.items = deleteProduct(cartItems, product);
    },

    removeProductsFromCart: (state, action) => {
      const cartItems = state.items;
      const product = action.payload;

      const removeProduct = (cartItems, product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem.quantity === 1) {
          return cartItems.filter((item) => item.id === product.id);
        } else {
          return cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      };

      state.items = removeProduct(cartItems, product);
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

export const {
  cartTotal,
  cartCount,
  addProductsToCart,
  removeProductsFromCart,
  deleteProductFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
