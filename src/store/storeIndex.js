import { configureStore } from "@reduxjs/toolkit";

import ageCheckSlice from "./age-check-slice";

const store = configureStore({
  reducer: { ageCheck: ageCheckSlice.reducer },
});

export default store;
