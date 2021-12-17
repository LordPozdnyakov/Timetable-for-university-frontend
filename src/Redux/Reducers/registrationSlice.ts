import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  loading: false,
  error: "",
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    registrationFetching(state) {
      state.loading = true;
    },
    registrationFetchingSuccess(state, action: PayloadAction<object>) {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    },
    registrationFetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default registrationSlice.reducer;
