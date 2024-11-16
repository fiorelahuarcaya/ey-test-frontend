import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <main className="w-full">
        <Outlet />
      </main>
      <footer>
        <p>© 2024</p>
      </footer>
    </div>
  );
};

export default MainLayout;
