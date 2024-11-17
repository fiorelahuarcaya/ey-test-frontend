import { toast } from "react-toastify";
import api from "../utils/api";

export const login = async (
  email: string,
  password: string,
): Promise<string | null> => {
  try {
    const response = await api.post("/api/auth/login", {
      correo: email,
      contrasenia: password,
    });

    if (response.data.status === "success") {
      toast.success(response.data.message || "Inicio de sesión exitoso.");
      return response.data.data; // Retorna el token
    } else {
      toast.error(response.data.message || "No se pudo iniciar sesión.");
      return null;
    }
  } catch (error: any) {
    console.error("Error al iniciar sesión:", error);
    const errorMessage =
      error.response?.data?.message ||
      "Ocurrió un error al intentar iniciar sesión.";
    toast.error(errorMessage);
    return null;
  }
};

type SignUpData = {
  nombres: string;
  apellidos: string;
  correo: string;
  contrasenia: string;
};

export const signUp = async (data: SignUpData): Promise<boolean> => {
  try {
    const response = await api.post("/api/auth/signup", data);

    if (response.data.status === "success") {
      toast.success(
        response.data.message || "Usuario registrado correctamente.",
      );
      return true;
    } else {
      toast.error(response.data.message || "No se pudo registrar el usuario.");
      return false;
    }
  } catch (error: any) {
    console.error("Error al registrar usuario:", error);
    const errorMessage =
      error.response?.data?.message ||
      "Ocurrió un error al intentar registrar el usuario.";
    toast.error(errorMessage);
    return false;
  }
};
