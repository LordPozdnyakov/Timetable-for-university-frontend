import { instance } from "./core"


export const getProfileAPI = () => {
    debugger
    // @ts-ignore
    return instance.get('').then(response => response.data.user)
}