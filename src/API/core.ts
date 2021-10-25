import * as axios from "axios";

// @ts-ignore
export const instance = axios.create({
    baseURL: 'https://localhost:5001/'
});
