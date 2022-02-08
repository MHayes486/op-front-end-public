import { createSlice } from "@reduxjs/toolkit";


const signUpCheckSlice = createSlice({
  name: "signUpCheck",
  initialState: { signedUp: false },
  reducers: {
    validate(state) {
      state.signedUp = true;
    },
  },
});

export const signUpCheckActions = signUpCheckSlice.actions;

export default signUpCheckSlice;
