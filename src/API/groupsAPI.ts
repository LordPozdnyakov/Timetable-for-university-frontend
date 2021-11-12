import axios from "./core";
import GroupType from "../Types/GroupType";

export const getAllGroupsAPI = async () => {
  const response = await axios.get<GroupType[]>("groups");
  return response.data;
};

export const getGroupByIdAPI = async (id: number) => {
  const response = await axios.get<GroupType>(`groups/${id}`);
  return response.data;
};
