import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },

    decrement(state) {
      state.count = state.count - 1;
    },

    incrementByNumber(state, action) {
      state.count = state.count + action.payload;
    },

    decrementByNumber(state, action) {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrement, incrementByNumber, decrementByNumber } =
  counter.actions;

export default counter.reducer;
