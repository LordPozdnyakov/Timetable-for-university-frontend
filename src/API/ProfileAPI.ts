import { instance } from "./core"


export const getProfileAPI = () => {
    // @ts-ignore
    return instance.get('').then(response => response.data.user)
}