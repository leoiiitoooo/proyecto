import { useState } from "react";
import type { Carta } from "../assets/Card";
import CharacterCard from "./characterCard";
import CharacterModal from "./modal";

interface CardListProps {
  cards: Carta[];
}

const CardList = ({ cards }: CardListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCard, setSelectedCard] = useState<Carta | null>(null);

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 uppercase tracking-tighter">
          Colección de Héroes
        </h1>
        
        <input
          type="text"
          placeholder="Buscar guerrero..."
          className="bg-zinc-900 border border-zinc-700 text-white px-6 py-3 rounded-full w-full md:w-80 
                     focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all shadow-inner"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {filteredCards.map((card) => (
          <CharacterCard 
            key={card.id} 
            {...card} 
            onClick={() => setSelectedCard(card)} 
          />
        ))}
      </div>

      {selectedCard && (
        <CharacterModal 
          card={selectedCard} 
          onClose={() => setSelectedCard(null)} 
        />
      )}
    </div>
  );
};

export default CardList;