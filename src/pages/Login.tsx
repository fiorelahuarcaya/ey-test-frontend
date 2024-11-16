import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Login"; // Cambia el título de la pestaña del navegador
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Iniciar Sesión
        </h2>
        <form className="flex flex-col gap-4">
          {/* Grupo de Input: Correo Electrónico */}
          <div className="flex flex-col items-start">
            <label htmlFor="email" className="mb-2 text-sm text-gray-600">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo"
              className="p-3 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Grupo de Input: Contraseña */}
          <div className="flex flex-col items-start">
            <label htmlFor="password" className="mb-2 text-sm text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              className="p-3 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Botón */}
          <button
            type="button"
            className="p-3 bg-primary-500 hover:bg-primary-600 rounded transition-all font-medium"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
