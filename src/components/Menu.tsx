import { useEffect, useState } from "react";
import Logo from "./svg/Logo";

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // Cambia el estado según si hay token
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Elimina el token
    window.location.href = "/login"; // Redirige al login
  };

  return (
    <div className="flex flex-row w-full  justify-center items-center  bg-gray-50 py-4">
      <div className="w-full wrapper flex flex-row items-center justify-between ">
        <a href="/">
          <Logo height="48" />
        </a>
        <nav className="flex flex-row gap-6">
          {isLoggedIn ? (
            <>
              <a className="text-black hover:underline" href="/">
                Proveedores
              </a>
              <button
                className="text-black hover:underline"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <a className="text-black hover:underline" href="/login">
                Iniciar Sesión
              </a>

              <a className="text-black hover:underline" href="/sign-up">
                Registro
              </a>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Menu;
