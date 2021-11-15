import axios from "./core";
import IUser from "../Types/IUser";

export const getAllTeachersAPI = async () => {
  const response = await axios.get<IUser[]>("teachers");
  return response.data;
};
