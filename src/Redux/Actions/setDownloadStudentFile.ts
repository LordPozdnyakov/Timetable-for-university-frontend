import { setDownloadStudApi } from "../../API/setDownloadStudApi";
import { AppDispatch } from "../Store";

export const setDownloadStudentFile =
  (file: object) => async (dispatch: AppDispatch) => {
    try {
      const status = await setDownloadStudApi(file);
    } catch (e) {}
  };
