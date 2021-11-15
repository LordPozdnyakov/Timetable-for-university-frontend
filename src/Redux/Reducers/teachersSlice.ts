import IUser from "../../Types/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TeachersState = {
  teachers: IUser[];
  loading: boolean;
  error: string | null;
};

const initialTeachersState: TeachersState = {
  teachers: [],
  loading: false,
  error: null,
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState: initialTeachersState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchTeachersSuccess(state, action: PayloadAction<IUser[]>) {
      state.loading = false;
      state.error = null;
      state.teachers = action.payload;
    },
  },
});

export default teachersSlice.reducer;
