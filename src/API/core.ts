import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-chat-serv.herokuapp.com/",
});

instance.interceptors.request.use(
  async (config) => {
    const token = window.localStorage.token;
    config.headers = {
      Authorization: `Bearer${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
