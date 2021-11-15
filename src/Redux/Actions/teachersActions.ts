import { AppDispatch } from "../Store";
import { teachersSlice } from "../Reducers/teachersSlice";
import { getAllTeachersAPI } from "../../API/teachersAPI";

const { fetchData, fetchDataError, fetchTeachersSuccess } =
  teachersSlice.actions;

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
