import { Provider } from "../utils/types";

export const getProviders = async (): Promise<Provider[]> => {
  // Datos estáticos por ahora
  return [
    {
      id: 1,
      razonSocial: "Proveedor Uno S.A.",
      nombreComercial: "ProvUno",
      identificacionTributaria: "12345678901",
      telefono: "987654321",
      correo: "contacto@provuno.com",
      sitioWeb: "https://provuno.com",
      direccion: "Calle Falsa 123",
      pais: "Perú",
      facturacionAnual: 1000000,
      fechaUltimaEdicion: "2024-11-16T12:00:00Z",
    },
    {
      id: 2,
      razonSocial: "Proveedor Dos S.A.",
      nombreComercial: "ProvDos",
      identificacionTributaria: "10987654321",
      telefono: "912345678",
      correo: "info@provdos.com",
      sitioWeb: "https://provdos.com",
      direccion: "Av. Principal 456",
      pais: "Chile",
      facturacionAnual: 2000000,
      fechaUltimaEdicion: "2024-10-15T15:30:00Z",
    },
  ];
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

export const deleteProvider = async (id: number): Promise<void> => {
  await fetch(`https://api-tu-backend.com/proveedores/${id}`, {
    method: "DELETE",
  });
};

export const fetchScreeningData = async (id: number): Promise<any[]> => {
  const response = await fetch(`https://api-tu-backend.com/screening/${id}`);
  return response.json();
};
