import { useEffect, useState } from "react";

import Hero from "../components/Hero";

import { createProvider, getProviders } from "../services/providers";
import { Provider } from "../utils/types";
import Table from "../components/providers/Table";
import TableOptions from "../components/providers/TableOptions";
import Modal from "../components/Modal";
import AddProviderForm from "../components/providers/AddProviderForm";

const Providers = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isModalOpen, setModalOpen] = useState(false); // Controla el estado del modal

  useEffect(() => {
    document.title = "Gestión de Proveedores";

    const fetchProviders = async () => {
      const data = await getProviders();
      setProviders(data);
    };

    fetchProviders();
  }, []);

  // Abre el modal
  const handleAddProvider = () => {
    setModalOpen(true);
  };

  // Cierra el modal
  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Maneja el envío del formulario desde el modal
  const handleFormSubmit = async (newProvider: Provider) => {
    try {
      const createdProvider = await createProvider(newProvider); // Llama a la API para crear el proveedor
      setProviders([...providers, createdProvider]); // Agrega el nuevo proveedor a la lista
      alert("Proveedor agregado correctamente.");
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al agregar el proveedor. Inténtalo nuevamente.");
    } finally {
      setModalOpen(false); // Cierra el modal
    }
  };

  return (
    <div>
      <Hero
        title="Gestión de Proveedores"
        backgroundImage="/images/providers.png"
      />

      <div className="flex flex-col items-center w-full py-10 ">
        <div className="wrapper">
          <TableOptions onAddProvider={handleAddProvider} />
          <Table providers={providers} />
          {/* Modal para agregar proveedores */}

          {/* Modal para agregar proveedores */}
          <Modal isOpen={isModalOpen} onClose={handleModalClose}>
            <h2 className="text-2xl font-bold mb-4">Agregar Proveedor</h2>
            <AddProviderForm
              onSubmit={handleFormSubmit}
              onClose={handleModalClose}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Providers;
