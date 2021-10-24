import * as axios from "axios";
// @ts-ignore
const httpsAgent = new https.Agent({
    // @ts-ignore
    ca: fs.readFileSync("./resource/bundle.crt"),
    // @ts-ignore
    cert: fs.readFileSync("./resrouce/thirdparty.crt"),
    // @ts-ignore
    key: fs.readFileSync("./resource/key.pem"),
})


// @ts-ignore
export const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    httpsAgent
});