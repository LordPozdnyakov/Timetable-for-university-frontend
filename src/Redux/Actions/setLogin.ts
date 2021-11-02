import { setUserLoginAPI } from "../../API/AuthAPI";
import { FormikValues } from "../../Modules";
import { openNotification } from "../../Utils/helpers/openNotification";
import { loginSlice } from "../Reducers/loginSlice";
import { AppDispatch } from "../Store";

export const setLogin =
  (values: FormikValues) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginSlice.actions.loginFetching());
      const {
        status,
        data,
        token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MzU4NTQyODgsImV4cCI6MTY2NzM5MDI5MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jsAb4DYcwK5GTeBnd95B-O37aInEVAXqoOwdOwYBYyU",
      } = await setUserLoginAPI(values);
      window.localStorage["token"] = token;
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
