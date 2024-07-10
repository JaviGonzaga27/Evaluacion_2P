import React, { useState } from 'react';

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
    setShowModal(!showModal);
};

return (
    <div className={`fixed inset-0 flex items-center justify-center ${showModal ? 'visible' : 'invisible'}`}>
        <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Mensaje Emergente</h2>
            <p>Este es un mensaje emergente.</p>
            <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4">Cerrar</button>
        </div>
    </div>
);}

export default Modal;
