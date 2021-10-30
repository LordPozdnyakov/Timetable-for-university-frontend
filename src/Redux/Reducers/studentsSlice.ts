import IUser from "../../Types/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StudentsState = {
  students: IUser[];
  loading: boolean;
  error: string | null;
  selectedStudent: IUser | null;
};

const initialStudentsState: StudentsState = {
  students: [],
  loading: false,
  error: null,
  selectedStudent: null,
};

export const studentsSlice = createSlice({
  name: "students",
  initialState: initialStudentsState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchStudentsSuccess(state, action: PayloadAction<IUser[]>) {
      state.loading = false;
      state.error = null;
      state.students = action.payload;
    },
    fetchStudentByIdSuccess(state, action: PayloadAction<IUser>) {
      state.loading = false;
      state.error = null;
      state.selectedStudent = action.payload;
    },
  },
});

export default studentsSlice.reducer;
