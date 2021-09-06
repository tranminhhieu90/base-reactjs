import localForage from "localforage";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const isProd = process.env.NODE_ENV !== "development";

const Http = axios.create({
  baseURL: isProd
    ? process.env.REACT_APP_PROD_URL
    : process.env.REACT_APP_DEV_URL,
  timeout: 30000,
  timeoutErrorMessage: "Request Timeout",
});

Http.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const token = localForage.getItem("token");
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error: AxiosError) {
    if (!isProd) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

Http.interceptors.response.use(
  function (response: AxiosResponse) {
    if (!isProd) {
      console.log("SUC Resp: ", response.data);
    }

    return response.data;
  },
  function (error: AxiosError) {
    if (error.response) {
      if (!isProd) {
        console.log("ERR Resp: ", error.response);
      }
      return Promise.reject(error.response);
    }

    if (!isProd) {
      console.log("Err: ", error);
    }

    return Promise.reject(error);
  }
);

export default Http;
