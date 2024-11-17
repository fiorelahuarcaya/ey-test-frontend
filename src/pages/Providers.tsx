import { useEffect, useState } from "react";

import Hero from "../components/Hero";

import {
  getProviders,
  getProviderById,
  deleteProvider,
} from "../services/providers";
import { Provider } from "../utils/types";
import Table from "../components/providers/Table";
import TableOptions from "../components/providers/TableOptions";
import Modal from "../components/Modal";
import ProviderForm from "../components/providers/ProviderForm";
import ConfirmationModal from "../components/providers/ConfirmationModal";
import ViewDetails from "../components/providers/ViewDetails";
import {
  fetchOfacSanctions,
  fetchWorldBankScreening,
} from "../services/screening";
import Screening from "../components/providers/Screening";

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

  const handleCreate = () => {
    openModal(
      <ProviderForm
        onSubmit={(newProvider) => {
          if (newProvider) {
            setProviders((prev) => {
              const updatedProviders = [newProvider, ...prev];
              return updatedProviders.sort(
                (a, b) =>
                  new Date(b.fechaUltimaEdicion).getTime() -
                  new Date(a.fechaUltimaEdicion).getTime(),
              );
            });
          } else {
            console.error("No se pudo crear el proveedor.");
          }
          closeModal();
        }}
        onClose={closeModal}
      />,
    );
  };

  const handleEdit = (provider: Provider) => {
    openModal(
      <ProviderForm
        initialValues={provider}
        onSubmit={(updatedProvider) => {
          setProviders((prev) => {
            // Reemplaza el proveedor actualizado y ordena por fechaUltimaEdicion descendente
            const updatedProviders = prev
              .map((p) =>
                p.proveedorId === updatedProvider.proveedorId
                  ? updatedProvider
                  : p,
              )
              .sort(
                (a, b) =>
                  new Date(b.fechaUltimaEdicion).getTime() -
                  new Date(a.fechaUltimaEdicion).getTime(),
              );
            return updatedProviders;
          });
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
  const handleViewDetails = async (providerId: number) => {
    const provider = await getProviderById(providerId);
    if (provider) {
      openModal(<ViewDetails provider={provider} />);
    }
  };

  const handleScreening = async (provider: Provider) => {
    const ofacSanctions = await fetchOfacSanctions(provider.razonSocial);
    const offWorldBank = await fetchWorldBankScreening(provider.razonSocial);

    openModal(
      <Screening ofacSanctions={ofacSanctions} offWorldBank={offWorldBank} />,
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
            <Modal
              height={600}
              width={1000}
              isOpen={isModalOpen}
              onClose={closeModal}
            >
              {modalContent}
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Providers;
