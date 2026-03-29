import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router";
import type { ICarta } from "../types";

interface ActualizarProps {
  cartas: ICarta[];
  onActualizar: (id: number, carta: ICarta) => void;
}

export const ActualizarCarta: React.FC<ActualizarProps> = ({ cartas, onActualizar }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Estado inicial del formulario
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    vida: 100,
    fuerza: 50,
    defensa: 50,
    imagen: ""
  });

  // Efecto para precargar los datos de la carta
  useEffect(() => {
    const cartaEncontrada = cartas.find((c) => c.id === Number(id));
    if (cartaEncontrada) {
      setForm({
        nombre: cartaEncontrada.nombre,
        descripcion: cartaEncontrada.descripcion,
        vida: cartaEncontrada.vida,
        fuerza: cartaEncontrada.fuerza,
        defensa: cartaEncontrada.defensa,
        imagen: cartaEncontrada.imagen
      });
    }
  }, [id, cartas]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const cartaEditada: ICarta = {
      id: Number(id),
      nombre: form.nombre,
      descripcion: form.descripcion,
      vida: form.vida,
      fuerza: form.fuerza,
      defensa: form.defensa,
      imagen: form.imagen,
      onClick: () => {},
      onActualizar: () => {}
    };

    onActualizar(Number(id), cartaEditada);
    navigate("/"); // Volver al home tras guardar
  };

  if (!form.nombre && cartas.length > 0) return <div className="text-white text-center mt-20">Cargando datos del guerrero...</div>;

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center py-20 px-4">
      <Link to="/" className="mb-6 text-blue-500 uppercase text-[10px] font-bold tracking-widest hover:text-blue-400">
        ← Cancelar Edición
      </Link>

      <form onSubmit={handleSubmit} className="bg-neutral-900 border border-blue-500/20 p-8 rounded-3xl w-full max-w-xl shadow-[0_0_40px_rgba(59,130,246,0.1)]">
        <h2 className="text-2xl font-black mb-8 uppercase text-center tracking-tighter text-blue-500">
          Actualizar Atributos
        </h2>

        <div className="space-y-5">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase text-white/40 ml-1">Nombre</label>
            <input 
              type="text" 
              value={form.nombre}
              className="w-full bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-blue-500 transition-all"
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase text-white/40 ml-1">Descripción</label>
            <textarea 
              value={form.descripcion}
              className="w-full bg-black/40 border border-white/10 p-4 rounded-xl h-24 outline-none focus:border-blue-500 resize-none"
              onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
            />
          </div>

          <div>
            <label className="text-[10px] uppercase text-white/40 ml-1">URL de Imagen</label>
            <input 
              type="text" 
              value={form.imagen}
              className="w-full bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-blue-500"
              onChange={(e) => setForm({ ...form, imagen: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[9px] text-green-500 font-bold uppercase">Vida</label>
              <input 
                type="number" 
                value={form.vida}
                className="bg-black/40 p-3 rounded-lg border border-white/5 text-center"
                onChange={(e) => setForm({ ...form, vida: Number(e.target.value) })}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[9px] text-red-500 font-bold uppercase">Fuerza</label>
              <input 
                type="number" 
                value={form.fuerza}
                className="bg-black/40 p-3 rounded-lg border border-white/5 text-center"
                onChange={(e) => setForm({ ...form, fuerza: Number(e.target.value) })}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[9px] text-blue-500 font-bold uppercase">Defensa</label>
              <input 
                type="number" 
                value={form.defensa}
                className="bg-black/40 p-3 rounded-lg border border-white/5 text-center"
                onChange={(e) => setForm({ ...form, defensa: Number(e.target.value) })}
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 py-4 rounded-xl font-black uppercase mt-4 hover:bg-blue-500 transition-all shadow-lg">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};