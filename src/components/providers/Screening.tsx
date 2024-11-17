import React from "react";
import { OfacSanction, WorldBankScreening } from "../../utils/types";

type ScreeningProps = {
  ofacSanctions: OfacSanction[];
  offWorldBank: WorldBankScreening[];
};

const Screening: React.FC<ScreeningProps> = ({
  ofacSanctions,
  offWorldBank,
}) => {
  return (
    <div className="space-y-8">
      {/* Tabla de OFAC Sanctions */}
      <div>
        <h3 className="text-lg font-bold mb-4">OFAC Sanctions</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Nombre</th>
              <th className="border border-gray-300 px-4 py-2">Dirección</th>
              <th className="border border-gray-300 px-4 py-2">Tipo</th>
              <th className="border border-gray-300 px-4 py-2">Programas</th>
              <th className="border border-gray-300 px-4 py-2">Puntaje</th>
            </tr>
          </thead>
          <tbody>
            {ofacSanctions.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.adress || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.type}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.programs}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabla de Offshore Leaks */}
      <div className="w-full overflow-x-auto">
        <h3 className="text-lg font-bold mb-4">The World Bank</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Nombre
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Dirección
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                País
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Periodo de Inhabilitación
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Motivo
              </th>
            </tr>
          </thead>
          <tbody>
            {offWorldBank.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {item.firstName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.address}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.country}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.ineligibilityPeriod.fromDate} -{" "}
                  {item.ineligibilityPeriod.toDate}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.grounds}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Screening;
