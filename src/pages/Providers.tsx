import { useEffect } from 'react';

const Providers = () => {
    useEffect(() => {
        document.title = 'Gestión de Proveedores'; 
    }, []);
    return (
        <div>
            <h2>Listado de Proveedores</h2>
            <p>Esta sección mostrará el listado de proveedores en una tabla.</p>
        </div>
    );
};

export default Providers;
