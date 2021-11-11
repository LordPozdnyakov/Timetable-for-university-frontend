import axios from "./core";
import GroupType from "../Types/GroupType";

export const getAllGroupsAPI = async () => {
  const response = await axios.get<GroupType[]>("groups");
  return response.data;
};
