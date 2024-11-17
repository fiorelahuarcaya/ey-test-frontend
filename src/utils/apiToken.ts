import axios from "axios";

const apiToken = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

apiToken.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Recupera el token de localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Agrega el encabezado Authorization
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiToken;
