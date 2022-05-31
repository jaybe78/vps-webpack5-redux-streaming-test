import { createSlice } from "@reduxjs/toolkit";
import { CounterState } from "../../renderer/types";

const initialState = { value: 999 } as CounterState;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    updateCount(state, action) {
      state.value = action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { updateCount } = counterSlice.actions;
