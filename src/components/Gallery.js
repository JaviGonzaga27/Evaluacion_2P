import React, { useState } from 'react';

const Gallery = () => {
return (
    <section className="py-8 bg-white">
    <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Galería de Imágenes</h2>
        <div className="grid grid-cols-3 gap-4 align-middle justify-items-center">
            {/* Aquí puedes poner las imágenes, puedes usar imágenes de prueba o URLs */}
            <img src="https://via.placeholder.com/300" alt="Imagen 1" />
            <img src="https://via.placeholder.com/300" alt="Imagen 2" />
            <img src="https://via.placeholder.com/300" alt="Imagen 3" />
            <img src="https://via.placeholder.com/300" alt="Imagen 4" />
            <img src="https://via.placeholder.com/300" alt="Imagen 5" />
            <img src="https://via.placeholder.com/300" alt="Imagen 6" />
        </div>
    </div>
    </section>
);}

export default Gallery;
