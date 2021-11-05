import { setVerificationDataAPI } from "../../API/AuthAPI";
import { openNotification } from "../../Utils/helpers/openNotification";
import { recoverySlice } from "../Reducers/RecoverySlice";
import { AppDispatch } from "../Store";

export const SetRecoveryEmail =
  (values: any, path: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(recoverySlice.actions.recoveryFetching());
      const { status, data } = await setVerificationDataAPI(values, path);
      dispatch(recoverySlice.actions.recoveryFetchingSuccess(data));
      openNotification({
        title: "Запрос на восстановление отпралвен!",
        type: "success",
        text: "Проверьте свою электронную почту",
      });
      return status;
    } catch (e) {
      dispatch(
        recoverySlice.actions.recoveryFetchingError(
          `Помилка при завантаженні: ${(e as Error).message}`
        )
      );
      openNotification({
        title: "Ошибка восстановления",
        type: "error",
        text: "Проверьте ваш емаил",
      });
    }
  };
