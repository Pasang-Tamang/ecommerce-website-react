import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log(state.count, "we are here");
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },

    reset: (state) => {
      state.count = 0;
    },

    incrementByValue: (state, data) => {
      //console.log(data);
      state.count += Number(data.payload);
    },
  },
});

export const { increment, decrement, reset, incrementByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
