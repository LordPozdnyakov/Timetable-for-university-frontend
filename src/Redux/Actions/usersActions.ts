import { AppDispatch } from "../Store";
import { getAllUsersAPI, getUsersByIdAPI } from "../../API/usersAPI";
import { usersSlice } from "../Reducers/usersSlice";

const { fetchData, fetchDataError, fetchUsersSuccess, fetchUserByIdSuccess } =
  usersSlice.actions;

export const getUsers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await getAllUsersAPI();
      dispatch(fetchUsersSuccess(response));
    } catch (e) {
      dispatch(
        fetchDataError(`Помилка при завантаженні: ${(e as Error).message}`)
      );
    }
  };
};

export const getGroupById = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await getUsersByIdAPI(id);
      dispatch(fetchUserByIdSuccess(response));
    } catch (e) {
      dispatch(
        fetchDataError(`Помилка при завантаженні: ${(e as Error).message}`)
      );
    }
  };
};
