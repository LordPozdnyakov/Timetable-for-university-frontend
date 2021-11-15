import axios from "./core";
import IUser from "../Types/IUser";
import StudentFormInfo from "../Types/StudentFormInfo";

export const getAllStudentsAPI = async () => {
  const response = await axios.get<IUser[]>("users");
  return response.data;
};

export const getStundentByIdAPI = async (id: number) => {
  const response = await axios.get<IUser>(`users/${id}`);
  return response.data;
};

export const addStundentAPI = async (student: StudentFormInfo) => {
  const response = await axios.post<IUser>("users", student);
  return response.data;
};

export const editStundentAPI = async (
  id: number,
  updatedStudent: StudentFormInfo
) => {
  const response = await axios.put<IUser>(`users/${id}`, updatedStudent);
  return response.data;
};

export const deleteStundentAPI = async (id: number) => {
  const response = await axios.delete(`users/${id}`);
  return response.data;
};

export const getStudentsByGroupAPI = async (groupId: number) => {
  const response = await axios.get<IUser[]>(`users?groupId=${groupId}`);
  return response.data;
};

export const getSortedStudentsAPI = async (sortBy: string, order: string) => {
  const response = await axios.get<IUser[]>(
    `users?_sort=${sortBy}&_order=${order}`
  );
  return response.data;
};
