import { FormikValues } from "../Modules";
import instance from "./core";

export interface responseType {
  status: number;
  data: object;
  token: string;
}

export const setUserLoginAPI = async (values: FormikValues) => {
  const response: responseType = await instance.post("/user/login", values);
  return response;
};
