import { createSlice } from "@reduxjs/toolkit";

const logInCheckSlice = createSlice({
  name: "logInCheck",
  initialState: { logedIn: false },
  reducers: {
    logout(state) {
      state.logedIn = false;
    },
    validate(state) {
      state.logedIn = true;
    },
  },
});

export const logInCheckActions = logInCheckSlice.actions;

export default logInCheckSlice;
