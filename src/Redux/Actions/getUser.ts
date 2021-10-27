import { GET_USER} from "../../Constant/Constant"


export type getUserActionType = {
    type:  typeof  GET_USER
    user: object
}




export const getUser = (user: object):getUserActionType => ({type: GET_USER, user})

