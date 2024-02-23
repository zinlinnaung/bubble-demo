import axios from "axios";

const baseURL = import.meta.env.VITE_SERVICE_BASE_URL;

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL,
  });
  return axiosInstance;
};

export default useAxios;
