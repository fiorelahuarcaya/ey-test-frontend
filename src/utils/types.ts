export type Provider = {
  proveedorId: number;
  razonSocial: string;
  nombreComercial: string;
  identificacionTributaria: string;
  numeroTelefonico: string;
  correoElectronico: string;
  sitioWeb?: string;
  direccionFisica: string;
  pais: string;
  facturacionAnual: number;
  fechaUltimaEdicion: string;
};

export type WorldBankScreening = {
  firstName: string;
  address: string;
  country: string;
  ineligibilityPeriod: {
    fromDate: string;
    toDate: string;
  };
  grounds: string;
};

export type OfacSanction = {
  name: string;
  adress: string;
  type: string;
  programs: string;
  score: string;
};

export type OffshoreLeak = {
  entity: string;
  jurisdiction: string;
  linkedTo: string;
  dataFrom: string;
};
