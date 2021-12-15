import { setVerificationDataAPI } from "../../API/AuthAPI";
import { FormikValues } from "../../Modules";
import { openNotification } from "../../Utils/helpers/openNotification";
import { loginSlice } from "../Reducers/loginSlice";
import { AppDispatch } from "../Store";

export const setLogin =
  (values: FormikValues, path: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginSlice.actions.loginFetching());
      const { status, data } = await setVerificationDataAPI(values, path);
      window.localStorage["token"] = data.token;
      window.localStorage["privilage"] = data.privilege;
      dispatch(loginSlice.actions.loginFetchingSuccess(data));
      openNotification({
        title: "Авторизация прошла успешно",
        type: "success",
        text: "Вы успешно авторизировались",
      });
      return status;
    } catch (e) {
      dispatch(
        loginSlice.actions.loginFetchingError(
          `Помилка при завантаженні: ${(e as Error).message}`
        )
      );
      openNotification({
        title: "Ошибка авторизации",
        type: "error",
        text: "Проверьте логин или пароль",
      });
    }
  };
