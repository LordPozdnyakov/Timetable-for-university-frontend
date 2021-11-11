import { AppDispatch } from "../Store";
import { getAllGroupsAPI } from "../../API/groupsAPI";
import { groupsSlice } from "../Reducers/groupsSlice";

const { fetchData, fetchDataError, fetchGroupsSuccess } = groupsSlice.actions;

export const getGroups = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await getAllGroupsAPI();
      dispatch(fetchGroupsSuccess(response));
    } catch (e) {
      dispatch(
        fetchDataError(`Помилка при завантаженні: ${(e as Error).message}`)
      );
    }
  };
};
