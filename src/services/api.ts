import axios, { AxiosInstance } from "axios";
import { toast } from "react-toastify";

const api = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: "http://localhost:5000",
  });

  instance.interceptors.response.use(
    (response) => {
      if (response.headers["content-type"]?.includes("application/json")) {
        return response.data;
      }
      return response;
    },
    (error) => {
      toast.error("Ocorreu um erro na requisição.");
      return Promise.reject(error);
    }
  );

  return instance;
};

export default api;
