import { FormikValues } from "../Modules";
import instance from "./core";

export interface responseType {
  status: number;
  data: {
    token: string;
    privilege: "string";
    firstName: "string";
    lastName: "string";
    patronymic: "string";
    groupName: "string";
  };
}

export const setUserLoginAPI = async (values: FormikValues) => {
  const response: responseType = await instance.post("login", values);
  return response;
};
