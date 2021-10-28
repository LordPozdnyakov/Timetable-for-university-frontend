import {Action, Dispatch } from 'redux';
import { setUserLoginAPI } from '../../API/ProfileAPI';
import { SET_DATA } from '../../Constant/Constant';
import MyFormProps from '../../Types/IFormikType';
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



export const setUserLogin =  (values:MyFormProps) => (dispatch:Dispatch<setData>) => {
             return setUserLoginAPI(values).then((promise) => {
                    const {status,data} = promise;
                    if(status === 200) {
                        openNotification({
                            text: "Авторизация прошла успешно",
                            type: "success",
                        })
                        // @ts-ignore
                        window.axios.defaults.headers.common['token'] = data.token;
                        // @ts-ignore
                        window.localStorage['token'] = data.token;
                        // @ts-ignore
                        dispatch(setData(data))
                    } else {
                        openNotification({
                            text: "Ошибка авторизации",
                            message: "Проверьте логин или пароль",
                            type: "error"
                        })
                    }
                    return status
             })
}
