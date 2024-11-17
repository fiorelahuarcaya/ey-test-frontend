import { useEffect, useState } from "react";

import Hero from "../components/Hero";

import {
  createProvider,
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
    const data = await getProviderById(provider.id);
    openModal(
      <ProviderForm
        initialValues={data}
        onSubmit={(updatedProvider) => {
          setProviders((prev) =>
            prev.map((p) =>
              p.id === updatedProvider.id ? updatedProvider : p,
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
      <div>
        <h2 className="text-2xl font-bold mb-4 text-red-500">
          Eliminar Proveedor
        </h2>
        <p>
          ¿Estás seguro de querer eliminar al proveedor{" "}
          <strong>{provider.nombreComercial}</strong> con identificación{" "}
          <strong>{provider.identificacionTributaria}</strong>?
        </p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 rounded-md mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={async () => {
              await deleteProvider(provider.id);
              setProviders((prev) => prev.filter((p) => p.id !== provider.id));
              closeModal();
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Eliminar
          </button>
        </div>
      </div>,
    );
  };

  // Ver más detalles
  const handleViewDetails = async (provider: Provider) => {
    const data = await getProviderById(provider.id);
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
          <strong>Teléfono:</strong> {data.telefono}
        </p>
        <p>
          <strong>Correo:</strong> {data.correo}
        </p>
        <p>
          <strong>Sitio Web:</strong>{" "}
          <a href={data.sitioWeb} target="_blank" rel="noopener noreferrer">
            {data.sitioWeb}
          </a>
        </p>
        <p>
          <strong>Dirección:</strong> {data.direccion}
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
    const screeningData = await fetchScreeningData(provider.id);
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
