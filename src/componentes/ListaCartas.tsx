import React from "react";
import type { ICarta } from "../types";
import Carta from "./Carta";
import { Link } from "react-router";

interface Props {
    cartas: ICarta[];
    onBorrar: (id: number) => void;
    onVerDetalles: (carta: ICarta) => void;
}

const ListaCartas: React.FC<Props> = ({ cartas, onBorrar, onVerDetalles }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cartas.map(c => (
                <div key={c.id} className="relative group cursor-pointer" onClick={() => onVerDetalles(c)}>
                    <button 
                        onClick={(e) => { e.stopPropagation(); onBorrar(c.id); }}
                        className="absolute -top-2 -right-2 z-20 bg-red-600 text-white w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"
                    > ✕ </button>
  <Link 
    to={`/actualizar/${c.id}`}
    onClick={(e) => e.stopPropagation()} // Para que no se abra el modal
    className="absolute -top-3 left-5 z-30 bg-blue-600 text-white w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-xl flex items-center justify-center hover:bg-blue-500"
  >
    ✎
  </Link>   
                    <Carta {...c} />
                </div>
            ))}
        </div>
    );
};
export default ListaCartas;