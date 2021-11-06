import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  loading: false,
  error: "",
};

export const RecoveryPasswordSlice = createSlice({
  name: "recoveryPassword",
  initialState,
  reducers: {
    recoveryPasswordFetching: (state) => {
      state.loading = true;
    },
    recoveryPasswordFetchingSucess: (state, action: PayloadAction<object>) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    },
    recoveryPasswordFetchingError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default RecoveryPasswordSlice.reducer;
