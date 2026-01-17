import React, { useState } from "react";
import Carta from "./componentes/Carta";
import Modal from "./componentes/Modal";
const jugadores = [
  {
    id: 1,
    nombre: "Michael Jordan",
    imagen: "https://static.wikia.nocookie.net/nbastreet/images/9/97/FDB1BF72-3F75-446F-B4F2-000331AE638B.jpeg",
    descripcion: "Considerado el mejor jugador de todos los tiempos, con seis campeonatos de la NBA.",
    fuerza: 95,
    defensa: 90,
  },
  {
    id: 2,
    nombre: "LeBron James",
    imagen: "https://c.files.bbci.co.uk/28C4/production/_128563401_gettyimages-1463993781.jpg",
    descripcion: "Jugador versátil con múltiples campeonatos y MVPs, conocido por su fuerza física.",
    fuerza: 92,
    defensa: 88,
  },
  {
    id: 3,
    nombre: "Stephen Curry",
    imagen: "https://ewnqp79wvj7.exactdn.com/wp-content/uploads/2025/06/stephen-curry-mvp-finales-2022-warriors.jpg?strip=all",
    descripcion: "Revolucionó el juego con su tiro de tres puntos, líder de los Golden State Warriors.",
    fuerza: 85,
    defensa: 70,
  },
];

const App: React.FC = () => {
  const [descripcionSeleccionada, setDescripcionSeleccionada] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800">🏀 Cartas de Jugadores de Básquet</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jugadores.map((jugador) => (
          <Carta
            key={jugador.id}
            {...jugador}
            onClick={() => setDescripcionSeleccionada(jugador.descripcion)}
          />
        ))}
      </div>

      <Modal
        mostrar={!!descripcionSeleccionada}
        onClose={() => setDescripcionSeleccionada(null)}
        contenido={descripcionSeleccionada || ""}
      />
    </div>
  );
};

export default App;