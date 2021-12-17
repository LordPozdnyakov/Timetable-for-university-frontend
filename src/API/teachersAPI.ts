import axios from "./core";
import IUser from "../Types/IUser";
import TeacherFormInfo from "../Types/TeacherFormInfo";

export const getAllTeachersAPI = async () => {
  const response = await axios.get<IUser[]>("teachers");
  return response.data;
};

export const getTeacherByIdAPI = async (id: number) => {
  const response = await axios.get<IUser>(`teachers/${id}`);
  return response.data;
};

export const addTeacherAPI = async (teacher: TeacherFormInfo) => {
  const response = await axios.post<IUser>("teachers", teacher);
  return response.data;
};

export const editTeacherAPI = async (
  id: number,
  updatedTeacher: TeacherFormInfo
) => {
  const response = await axios.put<IUser>(`teachers/${id}`, updatedTeacher);
  return response.data;
};

export const deleteTeacherAPI = async (id: number) => {
  const response = await axios.delete(`teachers/${id}`);
  return response.data;
};
