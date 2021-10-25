import * as axios from "axios";


// @ts-ignore
export const instance = axios.create({
    baseURL: 'http://localhost:5001/',
});