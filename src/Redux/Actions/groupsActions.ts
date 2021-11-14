import { AppDispatch } from "../Store";
import {
  getAllGroupsAPI,
  getGroupByIdAPI,
  addGroupAPI,
} from "../../API/groupsAPI";
import { groupsSlice } from "../Reducers/groupsSlice";
import GroupFormInfo from "../../Types/GroupFormInfo";

const {
  fetchData,
  fetchDataError,
  fetchGroupsSuccess,
  fetchGroupByIdSuccess,
  addGroupSuccess,
  clearAddGroupData,
} = groupsSlice.actions;

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

export const getGroupById = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await getGroupByIdAPI(id);
      dispatch(fetchGroupByIdSuccess(response));
    } catch (e) {
      dispatch(
        fetchDataError(`Помилка при завантаженні: ${(e as Error).message}`)
      );
    }
  };
};

export const addGroup = (group: GroupFormInfo) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await addGroupAPI(group);
      dispatch(addGroupSuccess(response));
    } catch (e) {
      dispatch(fetchDataError(`Помилка: ${(e as Error).message}`));
    }
  };
};

export const clearAddGroupDataForm = () => {
  return (dispatch: AppDispatch) => {
    dispatch(clearAddGroupData());
  };
};
