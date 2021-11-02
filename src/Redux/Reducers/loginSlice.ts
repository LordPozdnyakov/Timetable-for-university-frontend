import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  loading: false,
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginFetching(state) {
      state.loading = true;
    },
    loginFetchingSuccess(state, action: PayloadAction<object>) {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    },
    loginFetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;
