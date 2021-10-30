import { getAllStudentsAPI, getStundentByIdAPI } from "../../API/studentsAPI";
import { AppDispatch } from "../Store";
import { studentsSlice } from "../Reducers/studentsSlice";

const {
  fetchData,
  fetchDataError,
  fetchStudentsSuccess,
  fetchStudentByIdSuccess,
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
