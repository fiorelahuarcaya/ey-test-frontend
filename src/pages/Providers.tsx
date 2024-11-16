import { useEffect } from 'react';
import Hero from '../components/Hero';

const Providers = () => {
    useEffect(() => {
        document.title = 'Gestión de Proveedores'; 
    }, []);
    return (
        <div>
            <Hero title="Gestión de Proveedores" backgroundImage="/images/providers.png"/>

            <p>Esta sección mostrará el listado de proveedores en una tabla.</p>
        </div>
    );
};

export default Providers;
