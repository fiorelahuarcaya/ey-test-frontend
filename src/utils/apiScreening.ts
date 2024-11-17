import axios from "axios";

// Base URL para la API de Screening
const apiScreening = axios.create({
  baseURL: import.meta.env.VITE_SCREENING_API_URL,
});

const loginScreening = async (): Promise<string | null> => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SCREENING_API_URL}/login`,
      {
        username: import.meta.env.VITE_SCREENING_USER,
        password: import.meta.env.VITE_SCREENING_PASSWORD,
      },
    );

    if (response.data && response.data.token) {
      return response.data.token;
    } else {
      console.error("No se pudo obtener el token de Screening.");
      return null;
    }
  } catch (error) {
    console.error("Error al iniciar sesión en Screening:", error);
    return null;
  }
};

apiScreening.interceptors.request.use(
  async (config) => {
    const token = await loginScreening();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiScreening;
