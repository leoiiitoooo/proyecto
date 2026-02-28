import type { Carta } from "../assets/Card";

interface CharacterModalProps {
  card: Carta;
  onClose: () => void;
}

const CharacterModal = ({ card, onClose }: CharacterModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-700 rounded-3xl max-w-2xl w-full p-8 relative overflow-hidden shadow-2xl">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors text-2xl"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <img 
            src={card.image} 
            alt={card.name} 
            className="w-full md:w-64 h-80 object-cover rounded-2xl border-2 border-zinc-700 shadow-lg"
          />

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-lg text-sm">
                #{card.id}
              </span>
              <h2 className="text-3xl font-black text-white">{card.name}</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-center">
                <p className="text-xs text-red-400 font-bold uppercase">Ataque</p>
                <p className="text-2xl font-black text-red-500">{card.attack}</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-xl text-center">
                <p className="text-xs text-blue-400 font-bold uppercase">Defensa</p>
                <p className="text-2xl font-black text-blue-500">{card.defense}</p>
              </div>
            </div>

            <h3 className="text-zinc-400 font-bold mb-2 uppercase text-sm tracking-widest">Descripción</h3>
            <p className="text-zinc-300 leading-relaxed italic">
              "{card.description || "Sin descripción disponible."}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;