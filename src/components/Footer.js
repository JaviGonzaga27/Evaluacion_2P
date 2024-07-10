import React, { useState } from 'react';

const Footer = () => {
return (
    <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Instagram</a>
        </div>
        </div>
    </footer>
);}

export default Footer;
