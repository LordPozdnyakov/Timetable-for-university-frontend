import IUser from "../../Types/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StudentsState = {
  students: IUser[];
  loading: boolean;
  error: string | null;
  selectedStudent: IUser | null;
  studentAddedSuccess: boolean;
  addedStudent: IUser | null;
};

const initialStudentsState: StudentsState = {
  students: [],
  loading: false,
  error: null,
  selectedStudent: null,
  studentAddedSuccess: false,
  addedStudent: null,
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
    addStudentSuccess(state, action: PayloadAction<IUser>) {
      state.error = null;
      state.loading = false;
      state.studentAddedSuccess = true;
      state.addedStudent = action.payload;
      state.students.push(action.payload);
    },
    clearAddStudentData(state) {
      state.error = null;
      state.studentAddedSuccess = false;
      state.addedStudent = null;
    },
    editStudentSuccess(state, action: PayloadAction<IUser>) {
      state.selectedStudent = action.payload;
      state.error = null;
      state.loading = false;
    },
    deleteStudentSuccess(state, action: PayloadAction<number>) {
      state.students = state.students.filter(
        (student: IUser) => student.id !== action.payload
      );
      state.error = null;
      state.loading = false;
    },
    getStudentsByGroupSuccess(state, action: PayloadAction<IUser[]>) {
      state.error = null;
      state.loading = false;
      state.students = action.payload;
    },
  },
});

export default studentsSlice.reducer;
