import axios from "./core";
import GroupType from "../Types/GroupType";
import GroupFormInfo from "../Types/GroupFormInfo";

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
