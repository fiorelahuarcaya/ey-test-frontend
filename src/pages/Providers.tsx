import { useEffect, useState } from "react";

import Hero from "../components/Hero";

import {
  getProviders,
  getProviderById,
  deleteProvider,
  fetchScreeningData,
} from "../services/providers";
import { Provider } from "../utils/types";
import Table from "../components/providers/Table";
import TableOptions from "../components/providers/TableOptions";
import Modal from "../components/Modal";
import ProviderForm from "../components/providers/ProviderForm";
import ConfirmationModal from "../components/providers/ConfirmationModal";

const Providers = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    document.title = "Gestión de Proveedores";

    const fetchProviders = async () => {
      const data = await getProviders();

      setProviders(data);
    };

    fetchProviders();
  }, []);

  // Manejo del modal
  const openModal = (content: JSX.Element) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  // Crear proveedor
  const handleCreate = () => {
    openModal(
      <ProviderForm
        onSubmit={(newProvider) => {
          setProviders((prev) => [...prev, newProvider]);
          closeModal();
        }}
        onClose={closeModal}
      />,
    );
  };

  // Editar proveedor
  const handleEdit = async (provider: Provider) => {
    const data = await getProviderById(provider.proveedorId);
    openModal(
      <ProviderForm
        initialValues={data}
        onSubmit={(updatedProvider) => {
          setProviders((prev) =>
            prev.map((p) =>
              p.proveedorId === updatedProvider.id ? updatedProvider : p,
            ),
          );
          closeModal();
        }}
        onClose={closeModal}
      />,
    );
  };

  // Eliminar proveedor
  const handleDelete = (provider: Provider) => {
    openModal(
      <ConfirmationModal
        title="Eliminar Proveedor"
        nombreComercial={provider.nombreComercial}
        identificacionTributaria={provider.identificacionTributaria}
        onConfirm={async () => {
          const statusDelete = await deleteProvider(provider.proveedorId);
          if (statusDelete === "success") {
            setProviders((prev) =>
              prev.filter((p) => p.proveedorId !== provider.proveedorId),
            );
          }
          closeModal();
        }}
        onCancel={closeModal}
        confirmText="Eliminar"
        cancelText="Cancelar"
      />,
    );
  };

  // Ver más detalles
  const handleViewDetails = async (provider: Provider) => {
    const data = await getProviderById(provider.proveedorId);
    openModal(
      <div>
        <h2 className="text-2xl font-bold mb-4">Detalles del Proveedor</h2>
        <p>
          <strong>Razón Social:</strong> {data.razonSocial}
        </p>
        <p>
          <strong>Nombre Comercial:</strong> {data.nombreComercial}
        </p>
        <p>
          <strong>Teléfono:</strong> {data.numeroTelefonico}
        </p>
        <p>
          <strong>Correo:</strong> {data.correoElectronico}
        </p>
        <p>
          <strong>Sitio Web:</strong>{" "}
          <a href={data.sitioWeb} target="_blank" rel="noopener noreferrer">
            {data.sitioWeb}
          </a>
        </p>
        <p>
          <strong>Dirección:</strong> {data.direccionFisica}
        </p>
        <p>
          <strong>País:</strong> {data.pais}
        </p>
        <p>
          <strong>Facturación Anual:</strong> $
          {data.facturacionAnual.toLocaleString()}
        </p>
        <p>
          <strong>Última Edición:</strong>{" "}
          {new Date(data.fechaUltimaEdicion).toLocaleString()}
        </p>
      </div>,
    );
  };

  // Screening
  const handleScreening = async (provider: Provider) => {
    const screeningData = await fetchScreeningData(provider.proveedorId);
    openModal(
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Screening de {provider.nombreComercial}
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th>Fuente</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            {screeningData.map((item, index) => (
              <tr key={index}>
                <td>{item.source}</td>
                <td>{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>,
    );
  };

  return (
    <div>
      <Hero
        title="Gestión de Proveedores"
        backgroundImage="/images/providers.png"
      />

      <div className="flex flex-col items-center w-full py-10 ">
        <div className="wrapper">
          <TableOptions onAddProvider={handleCreate} />
          <Table
            providers={providers}
            onViewDetails={handleViewDetails}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onScreening={handleScreening}
          />

          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              {modalContent}
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Providers;
