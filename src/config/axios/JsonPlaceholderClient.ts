import axiosClient from "axios";

export const jsonPlaceholderClient = axiosClient.create({
  baseURL: process.env.REACT_APP_POSTS,
  timeout: 10000,
});

jsonPlaceholderClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/";
    }
  }
);

export default jsonPlaceholderClient;
