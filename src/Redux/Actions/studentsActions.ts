import {
  addStundentAPI,
  getAllStudentsAPI,
  getStundentByIdAPI,
  editStundentAPI,
} from "../../API/studentsAPI";
import { AppDispatch } from "../Store";
import { studentsSlice } from "../Reducers/studentsSlice";
import StudentFormInfo from "../../Types/StudentFormInfo";
import { message } from "antd";

const {
  fetchData,
  fetchDataError,
  fetchStudentsSuccess,
  fetchStudentByIdSuccess,
  addStudentSuccess,
  clearAddStudentData,
  editStudentSuccess,
} = studentsSlice.actions;

export const getStudents = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await getAllStudentsAPI();
      dispatch(fetchStudentsSuccess(response));
    } catch (e) {
      dispatch(
        fetchDataError(`Помилка при завантаженні: ${(e as Error).message}`)
      );
    }
  };
};

export const getStudentById = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await getStundentByIdAPI(id);
      dispatch(fetchStudentByIdSuccess(response));
    } catch (e) {
      dispatch(
        fetchDataError(`Помилка при завантаженні: ${(e as Error).message}`)
      );
    }
  };
};

export const addStudent = (student: StudentFormInfo) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await addStundentAPI(student);
      dispatch(addStudentSuccess(response));
    } catch (e) {
      dispatch(fetchDataError(`Помилка: ${(e as Error).message}`));
    }
  };
};

export const clearAddStudentDataForm = () => {
  return (dispatch: AppDispatch) => {
    dispatch(clearAddStudentData());
  };
};

export const editStudent = (id: number, updatedStudent: StudentFormInfo) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await editStundentAPI(id, updatedStudent);
      dispatch(editStudentSuccess(response));
      message.success("Студента успішно оновлено");
    } catch (e) {
      dispatch(fetchDataError(`Помилка: ${(e as Error).message}`));
    }
  };
};
