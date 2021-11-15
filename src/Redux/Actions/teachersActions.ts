import { AppDispatch } from "../Store";
import { teachersSlice } from "../Reducers/teachersSlice";
import {
  addTeacherAPI,
  editTeacherAPI,
  getAllTeachersAPI,
  getTeacherByIdAPI,
} from "../../API/teachersAPI";
import TeacherFormInfo from "../../Types/TeacherFormInfo";
import { message } from "antd";

const {
  fetchData,
  fetchDataError,
  fetchTeachersSuccess,
  fetchTeacherByIdSuccess,
  addTeacherSuccess,
  editTeacherSuccess,
  clearAddTeacherData,
} = teachersSlice.actions;

export const getTeachers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await getAllTeachersAPI();
      dispatch(fetchTeachersSuccess(response));
    } catch (e) {
      dispatch(
        fetchDataError(`Помилка при завантаженні: ${(e as Error).message}`)
      );
    }
  };
};

export const getTeacherById = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await getTeacherByIdAPI(id);
      dispatch(fetchTeacherByIdSuccess(response));
    } catch (e) {
      dispatch(
        fetchDataError(`Помилка при завантаженні: ${(e as Error).message}`)
      );
    }
  };
};

export const addTeacher = (teacher: TeacherFormInfo) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await addTeacherAPI(teacher);
      dispatch(addTeacherSuccess(response));
    } catch (e) {
      dispatch(fetchDataError(`Помилка: ${(e as Error).message}`));
    }
  };
};

export const editTeacher = (id: number, updatedTeacher: TeacherFormInfo) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await editTeacherAPI(id, updatedTeacher);
      dispatch(editTeacherSuccess(response));
      message.success("Викладача успішно оновлено");
    } catch (e) {
      dispatch(fetchDataError(`Помилка: ${(e as Error).message}`));
    }
  };
};

export const clearAddTeacherDataForm = () => {
  return (dispatch: AppDispatch) => {
    dispatch(clearAddTeacherData());
  };
};
