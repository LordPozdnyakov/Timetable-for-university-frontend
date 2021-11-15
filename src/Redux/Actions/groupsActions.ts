import { AppDispatch } from "../Store";
import {
  getAllGroupsAPI,
  getGroupByIdAPI,
  addGroupAPI,
  editGroupAPI,
} from "../../API/groupsAPI";
import { groupsSlice } from "../Reducers/groupsSlice";
import GroupFormInfo from "../../Types/GroupFormInfo";
import { message } from "antd";

const {
  fetchData,
  fetchDataError,
  fetchGroupsSuccess,
  fetchGroupByIdSuccess,
  addGroupSuccess,
  clearAddGroupData,
  editGroupSuccess,
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

export const editGroup = (id: number, updatedGroup: GroupFormInfo) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData());
      const response = await editGroupAPI(id, updatedGroup);
      dispatch(editGroupSuccess(response));
      message.success("Групу успішно оновлено");
    } catch (e) {
      dispatch(fetchDataError(`Помилка: ${(e as Error).message}`));
    }
  };
};
