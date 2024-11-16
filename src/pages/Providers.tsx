import { useEffect, useState } from "react";

import Hero from "../components/Hero";

import { getProviders } from "../services/providers";
import { Provider } from "../utils/types";
import Table from "../components/providers/Table";
import TableOptions from "../components/providers/TableOptions";

const Providers = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    document.title = "Gestión de Proveedores";

    const fetchProviders = async () => {
      const data = await getProviders();
      setProviders(data);
    };

    fetchProviders();
  }, []);

  return (
    <div>
      <Hero
        title="Gestión de Proveedores"
        backgroundImage="/images/providers.png"
      />

      <div className="flex flex-col items-center w-full py-10 ">
        <div className="wrapper">
          <TableOptions />
          <Table providers={providers} />
        </div>
      </div>
    </div>
  );
};

export default Providers;
