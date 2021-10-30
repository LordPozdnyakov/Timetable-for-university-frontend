import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
});

instance.interceptors.request.use(
  async (config) => {
    const token = window.localStorage.token;
    config.headers = {
      token: `${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
