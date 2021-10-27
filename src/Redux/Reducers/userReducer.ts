import { setUserLoginAPI } from '../../API/ProfileAPI';
import { SET_DATA } from '../../Constant/Constant';
import openNotification from '../../Utils/helpers/openNotification';
import { setData } from '../Actions/setData';


const initialState = {
    data: null,
    isAuth: false,
    token: window.localStorage.token,
}

// @ts-ignore
export const UserReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case SET_DATA:
            return {
                ...state,
                data: payload,
                isAuth: false,
                token: window.localStorage.token
            }
        default:
            return state;
    }
};


export const setUserLogin =  (values:any) => (dispatch:any) => {
             // @ts-ignore
             return setUserLoginAPI(values).then((promise) => {
                 // @ts-ignore
                    const {status,data,token} = promise;
                    if(status === 200) {
                        // @ts-ignore
                        openNotification({
                            text: "Авторизация прошла успешно",
                            type: "success"
                        })
                        // @ts-ignore
                        window.axios.defaults.headers.common['token'] = token;
                        window.localStorage['token'] = token;
                        // @ts-ignore
                        dispatch(setData(data))
                    } else {

                        openNotification({
                            text: "Ошибка авторизации",
                            // @ts-ignore
                            message: "Проверьте логин или пароль",
                            type: "error"
                        })
                    }
                    return status
             })
}
