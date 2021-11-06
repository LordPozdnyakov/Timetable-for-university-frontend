import { setVerificationDataAPI } from "../../API/AuthAPI";
import { openNotification } from "../../Utils/helpers/openNotification";
import { RecoveryPasswordSlice } from "../Reducers/RecoveryPasswordSlice";
import { AppDispatch } from "../Store";

export const setRecoveryPassword =
  (values: any, path: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(RecoveryPasswordSlice.actions.recoveryPasswordFetching());
      const { status, data } = await setVerificationDataAPI(values, path);
      dispatch(
        RecoveryPasswordSlice.actions.recoveryPasswordFetchingSucess(data)
      );
      openNotification({
        title: "Пароль успешно сменен",
        type: "success",
        text: "Пожалуйста авторизируйтесь",
      });
      return status;
    } catch (e) {
      dispatch(
        RecoveryPasswordSlice.actions.recoveryPasswordFetchingError(
          `Помилка при завантаженні: ${(e as Error).message}`
        )
      );
      openNotification({
        title: "Ошибка смены пароля",
        type: "error",
        text: "Пожалуйста проверьте данные",
      });
    }
  };
