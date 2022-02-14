import { configureStore } from "@reduxjs/toolkit";

import ageCheckSlice from "./age-check-slice";
import cartSlice from "./cart-slice";
import signUpCheckSlice from "./signUp-check-slice";
import logInCheckSlice from "./Login-check-slice";

const store = configureStore({
  reducer: {
    ageCheck: ageCheckSlice.reducer,
    cart: cartSlice.reducer,
    signUpCheck: signUpCheckSlice.reducer,
    logInCheck: logInCheckSlice.reducer,
  },
});

export default store;
