import { createSlice } from "@reduxjs/toolkit";

const logInCheckSlice = createSlice({
  name: "logInCheck",
  initialState: { logedIn: false },
  reducers: {
    validate(state) {
      state.logedIn = true;
    },
  },
});

export const logInCheckActions = logInCheckSlice.actions;

export default logInCheckSlice;
