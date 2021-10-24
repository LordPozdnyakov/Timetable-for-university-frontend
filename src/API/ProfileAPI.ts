import { instance } from "./core"


export const getProfileAPI = () => {
    // @ts-ignore
    return instance.get('').then(response => response.data.user)
}

export  const setUserLoginAPI = (values:any) => {
    debugger
    // @ts-ignore
    return instance.post("").then(response => alert(response.data))
}