import React from "react";

export interface CartaProps {
    id: number;
    nombre: string;
    imagen: string;
    descripcion: string;
    fuerza: number;
    defensa: number;
    onClick: () => void;
}

const Carta: React.FC<CartaProps> = ({ id, nombre, imagen, fuerza, defensa, onClick }) => {
    return (
        <div
            className="bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-2xl p-6 w-80 cursor-pointer 
            hover:shadow-2xl hover:-translate-y-1 transform transition duration-300"
            onClick={onClick}
        >
            <div className="relative">
                <img
                    src={imagen}
                    alt={nombre}
                    className="w-full h-64 object-contain rounded-lg border border-gray-200 bg-gray-50"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-md shadow">
                    ID: {id}
                </span>
            </div>

            <h3 className="text-2xl font-extrabold mt-4 text-gray-800 tracking-wide">{nombre}</h3>

            <div className="flex justify-between mt-5 text-base">
                <span className="flex items-center gap-1 font-semibold text-red-600">
                    🏀 Fuerza: <span className="text-gray-800">{fuerza}</span>
                </span>
                <span className="flex items-center gap-1 font-semibold text-blue-600">
                    🛡 Defensa: <span className="text-gray-800">{defensa}</span>
                </span>
            </div>
        </div>
    );
};

export default Carta;