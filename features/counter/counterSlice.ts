import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

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
      console.log("about to update the count");
      state.value = action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { updateCount } = counterSlice.actions;
