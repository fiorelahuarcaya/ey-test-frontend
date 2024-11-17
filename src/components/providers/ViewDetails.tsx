import React from "react";
import AddCircle from "../svg/AddCircle";
import { Provider } from "../../utils/types";

type ViewDetailsProps = {
  provider: Provider;
};

const ViewDetails: React.FC<ViewDetailsProps> = ({ provider }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Detalles del Proveedor</h2>
      <p>
        <strong>Razón Social:</strong> {provider.razonSocial}
      </p>
      <p>
        <strong>Nombre Comercial:</strong> {provider.nombreComercial}
      </p>
      <p>
        <strong>Identificación Tributaria:</strong>{" "}
        {provider.identificacionTributaria}
      </p>
      <p>
        <strong>Teléfono:</strong> {provider.numeroTelefonico}
      </p>
      <p>
        <strong>Correo Electrónico:</strong> {provider.correoElectronico}
      </p>
      <p>
        <strong>Sitio Web:</strong>{" "}
        <a
          href={provider.sitioWeb}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {provider.sitioWeb}
        </a>{" "}
      </p>
      <p>
        <strong>Dirección:</strong> {provider.direccionFisica}
      </p>
      <p>
        <strong>País:</strong> {provider.pais}
      </p>
      <p>
        <strong>Facturación Anual:</strong> $
        {provider.facturacionAnual.toLocaleString()}
      </p>
      <p>
        <strong>Última Edición:</strong>{" "}
        {new Date(provider.fechaUltimaEdicion).toLocaleString()}
      </p>
      <p>
        <strong>Identificación en Base de Datos:</strong> {provider.proveedorId}
      </p>
    </div>
  );
};

export default ViewDetails;
