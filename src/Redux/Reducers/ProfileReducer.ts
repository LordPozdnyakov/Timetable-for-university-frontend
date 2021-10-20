import {getUser} from "../Actions/getUser";
import {getProfileAPI} from "../../API/ProfileAPI"
import { GET_USER } from "../../Constant/Constant";

type fatherType = {
    name: string,
    phone: number
}

type motherType = {
    name: string,
    phone: number
}

type parentsType = {
    father: fatherType,
    mother: motherType
}

type userType = {
    name: string,
    date: string,
    phone: number,
    email: string,
    address: string,
    group: string,
    parents: parentsType
}

export type InitialStateType = {
    user: object | null
}

let initialState: InitialStateType = {
    user: null as userType | null
}


export const ProfileReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_USER: {
            return {...state, user: action.user }
        }
        default:
            return state;
    }

}


export  const getUserProfile = () => async (dispatch: any) => {
    dispatch(getUser(await getProfileAPI()))
}
