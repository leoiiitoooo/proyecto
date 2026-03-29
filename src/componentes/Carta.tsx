import React from "react";
import type { ICarta } from "../types";

const Carta: React.FC<ICarta> = ({ nombre, imagen, fuerza, defensa, vida }) => {
    return (
        <div className="group relative bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-5 w-full max-w-70 transition-all duration-300 hover:border-orange-500/50">
            <div className="relative h-48 mb-4 bg-neutral-800 rounded-lg overflow-hidden">
                <img src={imagen} alt={nombre} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="mb-3">
                <div className="flex justify-between text-[10px] mb-1 font-bold uppercase text-white/50">
                    <span>Vida</span>
                    <span className="text-green-400">{vida} HP</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full transition-all" style={{ width: `${Math.min(vida, 100)}%` }} />
                </div>
            </div>
            <h3 className="text-lg font-black text-white uppercase truncate">{nombre}</h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex flex-col items-center">
                    <span className="text-[9px] text-red-500 font-bold uppercase">Atk</span>
                    <span className="text-md font-bold">⚔️ {fuerza}</span>
                </div>
                <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex flex-col items-center">
                    <span className="text-[9px] text-blue-500 font-bold uppercase">Def</span>
                    <span className="text-md font-bold">🛡️ {defensa}</span>
                </div>
            </div>
        </div>
    );
};
export default Carta;