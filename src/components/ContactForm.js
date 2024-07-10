import React, { useState } from 'react';

const ContactForm = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when user starts typing
};

const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let formValid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
        newErrors.name = 'El nombre es requerido';
        formValid = false;
    }

    if (!formData.email.trim()) {
        newErrors.email = 'El correo electrónico es requerido';
        formValid = false;
    }

    if (!formData.message.trim()) {
        newErrors.message = 'El mensaje es requerido';
        formValid = false;
    }

    if (formValid) {
      // Enviar el formulario o realizar alguna acción aquí
        console.log('Formulario válido, enviar datos:', formData);
      // Aquí puedes resetear el formulario si es necesario
        setFormData({ name: '', email: '', message: '' });
    } else {
      // Mostrar errores
        setErrors(newErrors);
    }
};

return (
    <section className="py-8">
        <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Formulario de Contacto</h2>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu Nombre"
                className={`px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu Correo Electrónico"
                className={`px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
            <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu Mensaje"
                className={`px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full ${errors.message ? 'border-red-500' : ''}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Enviar Mensaje</button>
            </div>
        </form>
        </div>
    </section>
);}

export default ContactForm;
