import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import type { ICarta } from "../types";

export const FormularioCarta: React.FC<{ onCrear: (c: ICarta) => void }> = ({ onCrear }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nombre: "", imagen: "", desc: "", vida: 100, fuerza: 50, defensa: 50 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCrear({
      id: 0,
      nombre: form.nombre,
      descripcion: form.desc,
      vida: form.vida,
      fuerza: form.fuerza,
      defensa: form.defensa,
      imagen: form.imagen || "https://via.placeholder.com/150",
      onClick: () => {},
      onActualizar: () => {}
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center py-20 px-6">
      <Link to="/" className="mb-8 text-orange-500 uppercase text-xs font-bold tracking-widest hover:text-orange-400">← Volver</Link>
      <form onSubmit={handleSubmit} className="bg-neutral-900/50 p-10 rounded-3xl border border-white/10 w-full max-w-2xl backdrop-blur-xl">
        <h2 className="text-3xl font-black mb-8 text-center uppercase italic">Crear Carta</h2>
        <div className="space-y-6">
          <input 
            type="text" placeholder="Nombre..." 
            className="w-full bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-orange-500"
            onChange={e => setForm({...form, nombre: e.target.value})}
            required
          />
          <textarea 
            placeholder="Descripción..." 
            className="w-full bg-black/40 border border-white/10 p-4 rounded-xl h-32 outline-none focus:border-orange-500"
            onChange={e => setForm({...form, desc: e.target.value})}
          />
          <div className="grid grid-cols-3 gap-4">
            {['vida', 'fuerza', 'defensa'].map(stat => (
              <div key={stat} className="flex flex-col gap-2">
                <label className="text-[10px] uppercase text-orange-500 font-bold">{stat}</label>
                <input 
                    type="number" 
                    className="bg-black/40 border border-white/10 p-3 rounded-lg outline-none"
                    onChange={e => setForm({...form, [stat]: Number(e.target.value)})}
                />
              </div>
            ))}
          </div>
          <button className="w-full bg-orange-600 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-lg">
            Crear +
          </button>
        </div>
      </form>
    </div>
  );
};