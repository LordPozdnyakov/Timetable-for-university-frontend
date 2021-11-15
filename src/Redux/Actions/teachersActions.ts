import { AppDispatch } from "../Store";
import { teachersSlice } from "../Reducers/teachersSlice";
import { getAllTeachersAPI, getTeacherByIdAPI } from "../../API/teachersAPI";

const {
  fetchData,
  fetchDataError,
  fetchTeachersSuccess,
  fetchTeacherByIdSuccess,
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
