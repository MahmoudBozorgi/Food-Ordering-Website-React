import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shoping-cart/cartSlice";
import cartUiSlice from "./shoping-cart/cartUiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default store;
