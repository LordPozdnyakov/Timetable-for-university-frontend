// @ts-ignore
import {getUser} from "../Actions/getUser";
// @ts-ignore
import {getProfileAPI} from "../../API/ProfileAPI"
const GET_USER = "GET_USER";



let initialState = {
    user: null

}


// @ts-ignore
export const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        // @ts-ignore
        case GET_USER: {
            debugger
            return {...state, user: action.user }
        }
        default:
            return state;
    }

}

// @ts-ignore
export  const getUserProfile = () => async (dispatch) => {
    debugger
        // @ts-ignore
    dispatch(getUser(await getProfileAPI()))
    debugger
}
