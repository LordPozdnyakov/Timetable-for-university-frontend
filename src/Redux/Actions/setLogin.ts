import { setUserLoginAPI } from "../../API/AuthAPI";
import { FormikValues } from "../../Modules";
import { openNotification } from "../../Utils/helpers/openNotification";
import { loginSlice } from "../Reducers/loginSlice";
import { AppDispatch } from "../Store";

export const setLogin =
  (values: FormikValues) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginSlice.actions.loginFetching());
      const { status, data } = await setUserLoginAPI(values);
      debugger;
      window.localStorage["token"] = data.token;
      dispatch(loginSlice.actions.loginFetchingSuccess(data));
      return status;
      openNotification({
        title: "Авторизация прошла успешно",
        type: "success",
        text: "Вы успешно авторизировались",
      });
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
