import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Providers from "../pages/Providers";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta de login */}
        <Route path="/sign-up" element={<SignUp />} />

        {/* Rutas protegidas */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          {/* Página de Proveedores */}
          <Route index element={<Providers />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
