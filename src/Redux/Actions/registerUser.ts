import { setVerificationDataAPI } from "../../API/RegAPI";
import FormikValues from "../../Modules/RegistryForm/FormikValues";
import { openNotification } from "../../Utils/helpers/openNotification";
import { registrationSlice } from "../Reducers/registrationSlice";
import { AppDispatch } from "../Store";

export const registerUser =
  (values: FormikValues, path: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(registrationSlice.actions.registrationFetching);
      const { status, data } = await setVerificationDataAPI(values, path);
      dispatch(registrationSlice.actions.registrationFetchingSuccess(data));
      openNotification({
        title: "Реєстрація пройша успіщно",
        type: "success",
        text: "Ви успішно зареєструвались",
      });
      return status;
    } catch (e) {
      dispatch(
        registrationSlice.actions.registrationFetchingError(
          `Помилка при завантаженні: ${(e as Error).message}`
        )
      );
      openNotification({
        title: "Помилка при реєстрації",
        type: "error",
        text: "Перевірте логін або пароль",
      });
    }
  };
