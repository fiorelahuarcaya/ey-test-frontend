import apiToken from "../utils/apiToken";
import { Provider } from "../utils/types";
import { toast } from "react-toastify";

export const getProviders = async (): Promise<Provider[]> => {
  try {
    const response = await apiToken.get("/api/proveedor");
    if (response.data.status !== "success") {
      toast.error(`Error: ${response.data.message}`);
      return [];
    }
    toast.success("Proveedores listados correctamente.");
    return response.data.data as Provider[];
  } catch (error) {
    console.error("Error al obtener proveedores:", error);
    toast.error("No se pudo obtener la lista de proveedores.");
    return [];
  }
};

export const createProvider = async (
  newProvider: Provider,
): Promise<Provider | null> => {
  try {
    const response = await apiToken.post("/api/proveedor", newProvider);

    if (response.data.status === "success") {
      toast.success(response.data.message || "Proveedor creado correctamente.");
      return response.data.data;
    } else {
      toast.error(
        response.data.error.details || "No se pudo crear el proveedor.",
      );
      return null;
    }
  } catch (error: any) {
    console.error("Error al crear proveedor:", error);
    const errorMessage =
      error.response?.data?.error.details ||
      "Ocurrió un error al intentar crear el proveedor.";
    toast.error(errorMessage);
    return null;
  }
};

export const updateProvider = async (
  updatedProvider: Provider,
): Promise<Provider | null> => {
  try {
    const response = await apiToken.put(`/api/proveedor`, updatedProvider);

    if (response.data.status === "success") {
      toast.success(
        response.data.message || "Proveedor modificado correctamente.",
      );
      return response.data.data;
    } else {
      toast.error(
        response.data.message || "No se pudo modificar el proveedor.",
      );
      return null;
    }
  } catch (error: any) {
    console.error("Error al actualizar proveedor:", error);
    const errorMessage =
      error.response?.data?.message ||
      "Ocurrió un error al intentar modificar el proveedor.";
    toast.error(errorMessage);
    return null;
  }
};

export const getProviderById = async (id: number): Promise<Provider | null> => {
  try {
    const response = await apiToken.get(`/api/proveedor/${id}`);

    if (response.data.status === "success") {
      return response.data.data;
    } else {
      toast.error(response.data.message || "No se pudo obtener el proveedor.");
      return null;
    }
  } catch (error: any) {
    console.error(`Error al obtener proveedor con ID ${id}:`, error);
    const errorMessage =
      error.response?.data?.message ||
      "Ocurrió un error al intentar obtener el proveedor.";
    toast.error(errorMessage);
    return null;
  }
};

export const deleteProvider = async (id: number): Promise<string> => {
  try {
    const response = await apiToken.delete(`/api/proveedor/${id}`);

    if (response.data.status === "success") {
      toast.success(
        response.data.message || "Proveedor eliminado correctamente.",
      );
    } else {
      toast.error(response.data.message || "No se pudo eliminar el proveedor.");
    }

    return response.data.status;
  } catch (error: any) {
    console.error(`Error al eliminar proveedor con ID ${id}:`, error);
    const errorMessage =
      error.response?.data?.message ||
      "Ocurrió un error al intentar eliminar el proveedor.";
    toast.error(errorMessage);

    return "error";
  }
};

export const fetchScreeningData = async (id: number): Promise<any[]> => {
  const response = await fetch(`https://api-tu-backend.com/screening/${id}`);
  return response.json();
};
