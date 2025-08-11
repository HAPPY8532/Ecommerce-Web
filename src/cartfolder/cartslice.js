// src/cartfolder/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // array of products added to cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity++;
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && item.quantity > 1) item.quantity--;
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
