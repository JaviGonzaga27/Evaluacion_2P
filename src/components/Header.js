import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo512.png" alt="Logo" className="h-8 mr-2" /> {/* Asumiendo que el logo está en la carpeta pública */}
            <span className="text-lg font-semibold">Mi Sitio Web</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-800 hover:text-blue-500">Inicio</Link></li>
              <li><Link to="/gallery" className="text-gray-800 hover:text-blue-500">Galería</Link></li>
              <li><Link to="/contact" className="text-gray-800 hover:text-blue-500">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

