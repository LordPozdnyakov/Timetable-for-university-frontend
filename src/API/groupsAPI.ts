import axios from "./core";
import GroupType from "../Types/GroupType";
import GroupFormInfo from "../Types/GroupFormInfo";
import IUser from "../Types/IUser";

export const getAllGroupsAPI = async () => {
  const response = await axios.get<GroupType[]>("groups");
  return response.data;
};

export const getGroupByIdAPI = async (id: number) => {
  const response = await axios.get<GroupType>(`groups/${id}`);
  return response.data;
};

export const addGroupAPI = async (group: GroupFormInfo) => {
  const response = await axios.post<GroupType>("groups", group);
  return response.data;
};

export const editGroupAPI = async (id: number, updatedGroup: GroupFormInfo) => {
  const response = await axios.put<GroupType>(`groups/${id}`, updatedGroup);
  return response.data;
};

export const deleteGroupAPI = async (id: number) => {
  const response = await axios.delete(`groups/${id}`);
  return response.data;
};
