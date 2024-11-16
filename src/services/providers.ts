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
