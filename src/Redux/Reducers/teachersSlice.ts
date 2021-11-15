import IUser from "../../Types/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TeachersState = {
  teachers: IUser[];
  loading: boolean;
  error: string | null;
  selectedTeacher: IUser | null;
  teacherAddedSuccess: boolean;
  addedTeacher: IUser | null;
};

const initialTeachersState: TeachersState = {
  teachers: [],
  loading: false,
  error: null,
  selectedTeacher: null,
  teacherAddedSuccess: false,
  addedTeacher: null,
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
    fetchTeacherByIdSuccess(state, action: PayloadAction<IUser>) {
      state.loading = false;
      state.error = null;
      state.selectedTeacher = action.payload;
    },
    addTeacherSuccess(state, action: PayloadAction<IUser>) {
      state.error = null;
      state.loading = false;
      state.teacherAddedSuccess = true;
      state.addedTeacher = action.payload;
      state.teachers.push(action.payload);
    },
    editTeacherSuccess(state, action: PayloadAction<IUser>) {
      state.selectedTeacher = action.payload;
      state.error = null;
      state.loading = false;
    },
    clearAddTeacherData(state) {
      state.error = null;
      state.teacherAddedSuccess = false;
      state.addedTeacher = null;
    },
  },
});

export default teachersSlice.reducer;
