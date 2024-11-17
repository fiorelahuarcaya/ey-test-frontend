import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify"; // Importa el ToastContainer
import "react-toastify/dist/ReactToastify.css";
import "./styles/base.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right" // Posición del toast
        autoClose={3000} // Tiempo de cierre automático en milisegundos
        hideProgressBar={false} // Muestra barra de progreso
        newestOnTop={false} // Los toasts más recientes no aparecen arriba
        closeOnClick // Cierra el toast al hacer clic
        rtl={false} // Desactiva el modo RTL
        pauseOnFocusLoss // Pausa el cierre al perder el foco de la ventana
        draggable // Permite arrastrar el toast
        pauseOnHover // Pausa el cierre al pasar el mouse sobre el toast
        theme="light" // Tema del toast
      />
      <AppRoutes />
    </>
  );
};

export default App;
