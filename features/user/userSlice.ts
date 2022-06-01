import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserState } from "../../renderer/types";
import { AppDispatch } from "../../renderer/store";
import { normalize } from "normalizr";

const initialState = {
  email: "jbrice.r@bulbshare.com",
  firstname: "jb",
  loading: false,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticate(state, action) {
      state.loading = true;
      state.firstname = action.payload.name;
    },
    logout(state) {},
  },
});

const { authenticate, logout } = userSlice.actions;

// export const authenticateUser = () => async (dispatch: AppDispatch) => {
//   const response = await fetch("https://api.agify.io/?name=bella");
//   const data = await response.json();
//   dispatch(authenticate(data));
// };

export const authenticateUser = createAsyncThunk(
  "user/authenticateUser",
  async (userId, thunkAPI) => {
    const response = await fetch("https://api.agify.io/?name=bella");
    const data = await response.json();
    thunkAPI.dispatch(authenticate(data));
  }
);

export default userSlice.reducer;
