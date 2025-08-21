// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./temp";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
