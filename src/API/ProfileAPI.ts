import axios from "./core"



export const getProfileAPI = () => {
    //@ts-ignore
    return axios.get('').then(response => response.data.user)
}

export  const setUserLoginAPI = (values:any) => {
    // @ts-ignore
    return axios.post("login", values).then(response => response)
}