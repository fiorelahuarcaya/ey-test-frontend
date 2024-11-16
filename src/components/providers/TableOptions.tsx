import React from "react";

const TableOptions = () => {
  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     onSearch(event.target.value); // Envía el valor de búsqueda al padre
  // };

  return (
    <div className="flex justify-between items-center mb-4">
      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar proveedor..."
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-800"
        // onChange={handleSearch}
      />

      <button
        // onClick={onAddProvider}
        className="px-4 py-2 bg-primary-800 text-white font-bold rounded-lg shadow-md hover:bg-primary-700 transition"
      >
        Agregar Proveedor
      </button>
    </div>
  );
};

export default TableOptions;
