import { useState } from "react";
import { login } from "../services/auth";
import Menu from "../components/Menu";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita la recarga de la página

    const token = await login(email, password); // Llama al servicio de autenticación

    if (token) {
      // Guarda el token en localStorage
      localStorage.setItem("authToken", token);

      // Redirecciona a la página de proveedores
      window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-50">
      <Menu />
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Iniciar Sesión
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="p-3 bg-primary-700 hover:bg-primary-800 text-white rounded transition-all font-medium"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
