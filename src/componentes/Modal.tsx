import React from "react";

interface ModalProps {
    mostrar: boolean;
    onClose: () => void;
    contenido: string;
}

const Modal: React.FC<ModalProps> = ({ mostrar, onClose, contenido }) => {
    if (!mostrar) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                <h2 className="text-xl font-bold mb-4">Descripción</h2>
                <p className="text-gray-700 mb-4">{contenido}</p>
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Modal;