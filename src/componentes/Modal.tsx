import React from "react";
import type { ModalProps } from "../types";


export const ModalCarta: React.FC<ModalProps> = ({ carta, onClose }) => {
  // Si no hay carta seleccionada, no renderizamos nada
  if (!carta) return null;

  return (
    // Fondo oscuro con desenfoque
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose} // Cerrar al hacer clic en el fondo
    >
      {/* Contenedor del Modal con Glow Naranja */}
      <div 
        className="relative bg-neutral-900 border border-orange-500/30 rounded-3xl p-10 max-w-2xl w-full shadow-[0_0_60px_rgba(249,115,22,0.2)] animate-scaleInScroll"
        onClick={(e) => e.stopPropagation()} // Evitar que el clic dentro cierre el modal
      >
        {/* Botón Cerrar (X) */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-white/40 hover:text-orange-500 text-xl font-bold transition-colors"
        >
          ✕
        </button>

        {/* Encabezado del Modal */}
        <div className="flex items-center gap-6 mb-8 border-b border-white/5 pb-6">
          <img 
            src={carta.imagen} 
            alt={carta.nombre} 
            className="w-24 h-24 object-contain bg-black/40 rounded-full border border-white/10 p-2"
          />
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter bg-linear-to-b from-white to-orange-500 bg-clip-text text-transparent">
              {carta.nombre}
            </h2>
            <div className="flex gap-4 mt-2 text-xs uppercase font-bold tracking-widest text-white/50">
                <span>⚔️ {carta.fuerza} Atk</span>
                <span>🛡️ {carta.defensa} Def</span>
                <span className="text-green-400">❤️ {carta.vida} HP</span>
            </div>
          </div>
        </div>

        {/* Cuerpo del Modal: Descripción */}
        <div className="space-y-4">
            <h4 className="text-[10px] uppercase font-bold text-orange-500 tracking-[0.3em]">Habilidad Especial / Leyenda</h4>
            <p className="text-gray-300 leading-relaxed text-lg italic bg-white/5 p-6 rounded-xl border border-white/5 shadow-inner">
                {carta.descripcion || "Este personaje aún no tiene una leyenda forjada..."}
            </p>
        </div>
        
        <p className="mt-10 text-center text-white/10 text-[9px] uppercase tracking-[0.4em]">Propiedad de Card Engine v1.0</p>
      </div>
    </div>
  );
};

export default ModalCarta;