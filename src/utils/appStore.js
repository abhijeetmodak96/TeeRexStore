import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productSlice from "./productSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    product: productSlice,
  },
});

export default appStore;
