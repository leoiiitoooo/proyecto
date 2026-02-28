import type { Carta } from "../assets/Card";

interface CharacterCardProps extends Carta {
  onClick: () => void;
}

const CharacterCard = ({ id, name, attack, defense, image, onClick }: CharacterCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-zinc-900 border border-zinc-800 hover:border-yellow-500/50 
                 rounded-2xl p-4 w-64 text-white shadow-xl transition-all duration-300 
                 hover:-translate-y-2 cursor-pointer overflow-hidden"
    >
      <div className="absolute top-3 left-3 bg-yellow-500 text-black text-[10px] font-black px-2 py-0.5 rounded-full z-10">
        #{id}
      </div>

      <div className="relative h-48 mb-4 overflow-hidden rounded-xl border border-zinc-700">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <h2 className="text-xl font-bold text-center mb-4 text-zinc-100 group-hover:text-yellow-400">
        {name}
      </h2>

      <div className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-zinc-800">
        <div className="text-center">
          <p className="text-[10px] text-zinc-500 uppercase font-bold">ATK</p>
          <p className="text-xl font-black text-red-500">{attack}</p>
        </div>
        <div className="h-8 w-[1px] bg-zinc-700" />
        <div className="text-center">
          <p className="text-[10px] text-zinc-500 uppercase font-bold">DEF</p>
          <p className="text-xl font-black text-blue-500">{defense}</p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>
  );
};

export default CharacterCard;