import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  loading: false,
  error: "",
};

export const recoverySlice = createSlice({
  name: "recovery",
  initialState,
  reducers: {
    recoveryFetching(state) {
      state.loading = true;
    },
    recoveryFetchingSuccess(state, action: PayloadAction<object>) {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    },
    recoveryFetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default recoverySlice.reducer;
