import api from "../utils/api";
import { Provider } from "../utils/types";
import { toast } from "react-toastify";

export const getProviders = async (): Promise<Provider[]> => {
  try {
    const response = await api.get("/api/proveedor");
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
): Promise<Provider> => {
  // Simula una solicitud POST al backend
  const response = await fetch("https://api-tu-backend.com/proveedores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProvider),
  });

  if (!response.ok) {
    throw new Error("Error al crear el proveedor");
  }

  const createdProvider = await response.json();
  return createdProvider; // Retorna el proveedor creado
};

export const getProviderById = async (id: number): Promise<Provider> => {
  const response = await fetch(`https://api-tu-backend.com/proveedores/${id}`);
  return response.json();
};

export const deleteProvider = async (id: number): Promise<string> => {
  try {
    const response = await api.delete(`/api/proveedor/${id}`);

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
