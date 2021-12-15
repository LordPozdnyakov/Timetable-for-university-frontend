import axios from "./core";
import UserType from "../Types/UserType";

export const getAllUsersAPI = async () => {
  const response = await axios.get<UserType[]>("users");
  return response.data;
};

export const getUsersByIdAPI = async (id: number) => {
  const response = await axios.get<UserType>(`users/${id}`);
  return response.data;
};
