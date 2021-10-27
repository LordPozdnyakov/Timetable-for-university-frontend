import axios from "axios";


axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.headers.common["token"] = window.localStorage.token

// @ts-ignore
window.axios = axios;

export default axios;