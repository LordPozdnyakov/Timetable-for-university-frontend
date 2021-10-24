import { instance } from "./core"


export const getProfileAPI = () => {
    // @ts-ignore
    return instance.get('').then(response => response.data.user)
}

export  const setUserLoginAPI = (values:any) => {
    // @ts-ignore
    return instance.post("login", values).then(response => console.log(response))
}