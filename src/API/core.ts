import * as axios from "axios";
import https from "https";

// @ts-ignore
const httpsAgent = new https.Agent({
    rejectUnauthorized: false
})


// @ts-ignore
export const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    httpsAgent
});