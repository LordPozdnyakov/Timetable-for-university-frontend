import React from 'react';
import { setUserLoginAPI } from '../../API/ProfileAPI';
import { SET_DATA } from '../../Constant/Constant';


const initialState = {
    data: null,
    isAuth: false,
    token: window.localStorage.token,
}

export const UserReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
                isAuth: true,
                token: window.localStorage.token
            }
        default:
            return state;
    }
};


export const setUserLogin = (values:any) => () => {
            setUserLoginAPI(values)
}
