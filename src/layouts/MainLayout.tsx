
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <header>
                <h1>Gestión de Proveedores</h1>
                <nav>
                    {/* Aquí podrías agregar un menú de navegación si es necesario */}
                </nav>
            </header>
            <main className='wrapper'>
                {/* Este Outlet es donde se renderizan las rutas hijas */}
                <Outlet />
            </main>
            <footer>
                <p>© 2024, Tu Empresa</p>
            </footer>
        </div>
    );
};

export default MainLayout;
