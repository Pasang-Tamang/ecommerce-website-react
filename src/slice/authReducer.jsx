import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  jwt: "",
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, data) => {
      //console.log(state)
      //console.log(state.isLoggedIn);
      state.isLoggedIn = true;
      state.jwt = data.payload;
    },
  },
});

export const { login } = authReducer.actions;
export default authReducer.reducer;
