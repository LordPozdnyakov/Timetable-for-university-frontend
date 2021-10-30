import axios from "./core";
import IUser from "../Types/IUser";

export const getAllStudentsAPI = async () => {
  const response = await axios.get<IUser[]>("users");
  return response.data;
};

export const getStundentByIdAPI = async (id: number) => {
  const response = await axios.get<IUser>(`users/${id}`);
  return response.data;
};
