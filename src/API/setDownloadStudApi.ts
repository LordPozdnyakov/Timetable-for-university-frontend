import instance from "./core";

export const setDownloadStudApi = async (file: object) => {
  const { status } = await instance.post("/dowload", file);
  return status;
};
