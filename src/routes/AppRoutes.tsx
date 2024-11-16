import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Providers from "../pages/Providers";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta principal con el layout */}
        <Route path="/" element={<MainLayout />}>
          {/* Página de Proveedores */}
          <Route index element={<Providers />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
