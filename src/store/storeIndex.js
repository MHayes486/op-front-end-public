import { configureStore } from "@reduxjs/toolkit";

import ageCheckSlice from "./age-check-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { ageCheck: ageCheckSlice.reducer, cart: cartSlice.reducer }
});

export default store;
