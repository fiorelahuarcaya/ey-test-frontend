import React, { useState } from "react";
import { Provider } from "../../utils/types";
import Actions from "../svg/Actions";

type TableProps = {
  providers: Provider[];
  onEdit: (provider: Provider) => void;
  onDelete: (provider: Provider) => void;
  onScreening: (provider: Provider) => void;
  onViewDetails: (provider: Provider) => void;
};

const Table: React.FC<TableProps> = ({
  providers,
  onEdit,
  onDelete,
  onScreening,
  onViewDetails,
}) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const toggleMenu = (
    id: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (activeMenu === id) {
      setActiveMenu(null);
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: buttonRect.bottom,
      left: buttonRect.right - 120, // Ajusta según el ancho del menú
    });

    setActiveMenu(id);
  };

  return (
    <div className="w-full overflow-x-auto shadow-md rounded-lg">
      <table className="w-full bg-white">
        <thead className="bg-primary-200">
          <tr>
            <th className="min-w-52 py-2 px-4 text-left">
              Identificación Tributaria
            </th>
            <th className="min-w-52 py-2 px-4 text-left">Razón Social</th>
            <th className="min-w-52 py-2 px-4 text-left">Nombre Comercial</th>
            <th className="min-w-40 py-2 px-4 text-left">Teléfono</th>
            <th className="min-w-52 py-2 px-4 text-left">Correo</th>
            <th className="min-w-52 py-2 px-4 text-left">Sitio Web</th>
            <th className="min-w-52 py-2 px-4 text-left">Dirección</th>
            <th className="min-w-40 py-2 px-4 text-left">País</th>
            <th className="min-w-52 py-2 px-4 text-left">Facturación Anual</th>
            <th className="min-w-52 py-2 px-4 text-left">Última Edición</th>
            <th className="py-2 px-4 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <tr
              key={provider.proveedorId}
              className="border-t hover:bg-gray-100"
            >
              <td className="py-2 px-4 text-left">
                {provider.identificacionTributaria}
              </td>
              <td className="py-2 px-4 text-left">{provider.razonSocial}</td>
              <td className="py-2 px-4 text-left">
                {provider.nombreComercial}
              </td>
              <td className="py-2 px-4 text-left">
                {provider.numeroTelefonico}
              </td>
              <td className="py-2 px-4 text-left">
                {provider.correoElectronico}
              </td>
              <td className="py-2 px-4 text-left">
                {provider.sitioWeb ? (
                  <a
                    href={provider.sitioWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {provider.sitioWeb}
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td className="py-2 px-4 text-left">
                {provider.direccionFisica}
              </td>
              <td className="py-2 px-4 text-left">{provider.pais}</td>
              <td className="py-2 px-4 text-left">
                ${provider.facturacionAnual.toLocaleString()}
              </td>
              <td className="py-2 px-4 text-left">
                {provider.fechaUltimaEdicion}
              </td>
              <td className="relative py-2 px-4 text-left">
                <button
                  onClick={(event) => toggleMenu(provider.proveedorId, event)}
                  className="bg-none hover:bg-none"
                >
                  {" "}
                  <Actions />
                </button>
                {activeMenu === provider.proveedorId && (
                  <ul
                    className="absolute right-0 mt-2 max-w-60 bg-white border rounded-md shadow-lg z-10"
                    style={{
                      position: "fixed",
                      top: `${menuPosition.top}px`,
                      left: `${menuPosition.left}px`,
                    }}
                  >
                    <li
                      onClick={() => {
                        onViewDetails(provider);
                        setActiveMenu(null);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Ver más detalle
                    </li>
                    <li
                      onClick={() => {
                        onEdit(provider);
                        setActiveMenu(null);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Editar
                    </li>
                    <li
                      onClick={() => {
                        onDelete(provider);
                        setActiveMenu(null);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Eliminar
                    </li>
                    <li
                      onClick={() => {
                        onScreening(provider);
                        setActiveMenu(null); // Cierra el submenú
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Screening
                    </li>
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
