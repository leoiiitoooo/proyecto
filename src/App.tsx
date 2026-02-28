import CardList from "./components/cartasAcomodadas";
import type { Carta } from "./assets/Card";

const dragonBallCards: Carta[] = [
  {
    id: 1,
    name: "Goku (Ultra Instinto)",
    attack: 99,
    defense: 95,
    image: "https://vignette.wikia.nocookie.net/dragonball/images/5/5b/Goku_Line_Art.png",
    description: "El estado definitivo donde el cuerpo reacciona sin pensar. Su agilidad y poder rompen todos los límites conocidos."
  },
  {
    id: 2,
    name: "Vegeta (Ultra Ego)",
    attack: 97,
    defense: 90,
    image: "https://static.wikia.nocookie.net/dragonball/images/d/d3/Vegeta_DBS.png",
    description: "Un poder basado en el instinto de destrucción. Cuanto más daño recibe, más fuerte y agresivo se vuelve en combate."
  },
  {
    id: 3,
    name: "Gohan Bestia",
    attack: 96,
    defense: 88,
    image: "https://static.wikia.nocookie.net/dragonball/images/0/0d/Gohan_Beast.png",
    description: "El despertar de un poder latente aterrador. Su mirada fría y su fuerza bruta superan incluso a los dioses."
  },
  {
    id: 4,
    name: "Freezer Dorado",
    attack: 92,
    defense: 84,
    image: "https://static.wikia.nocookie.net/dragonball/images/2/23/Golden_Frieza_DBS.png",
    description: "El emperador del mal en su forma definitiva. Su elegancia es tan letal como sus rayos de energía destructiva."
  },
  {
    id: 5,
    name: "Broly (Super Saiyajin)",
    attack: 98,
    defense: 82,
    image: "https://static.wikia.nocookie.net/dragonball/images/5/5d/Broly_DBS.png",
    description: "Un guerrero de fuerza ilimitada que pierde el control. Su poder crece cada segundo, convirtiéndolo en un huracán de destrucción."
  },
  {
    id: 6,
    name: "Majin Buu",
    attack: 88,
    defense: 98,
    image: "https://static.wikia.nocookie.net/dragonball/images/e/e3/Majin_Buu_DBS.png",
    description: "Prácticamente indestructible gracias a su cuerpo elástico y capacidad de regeneración instantánea."
  },
  {
    id: 7,
    name: "Piccolo Orange",
    attack: 90,
    defense: 94,
    image: "https://static.wikia.nocookie.net/dragonball/images/7/77/Orange_Piccolo.png",
    description: "La evolución definitiva del guerrero Namekiano. Su cuerpo se vuelve masivo y su resistencia alcanza niveles divinos."
  },
  {
    id: 8,
    name: "Bills (Dios de la Destrucción)",
    attack: 100,
    defense: 96,
    image: "https://static.wikia.nocookie.net/dragonball/images/3/3a/Beerus_DBS.png",
    description: "Entidad encargada de mantener el equilibrio mediante la destrucción. Su técnica 'Hakai' puede borrar cualquier cosa de la existencia."
  },
  {
    id: 9,
    name: "Trunks del Futuro",
    attack: 85,
    defense: 80,
    image: "https://static.wikia.nocookie.net/dragonball/images/d/d5/Trunks_DBS.png",
    description: "Un espadachín experto que viaja por el tiempo para salvar el futuro. Su voluntad es su mayor arma."
  },
  {
    id: 10,
    name: "Cell Max",
    attack: 94,
    defense: 92,
    image: "https://static.wikia.nocookie.net/dragonball/images/c/c5/Cell_Max.png",
    description: "Un arma biológica de destrucción masiva. Una criatura sin mente diseñada solo para aniquilar todo a su paso."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-neutral-950 to-black text-white">
      <main className="py-12">
        <CardList cards={dragonBallCards} />
      </main>
      
      <footer className="text-center pb-12 opacity-50">
        <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-4" />
      </footer>
    </div>
  );
}

export default App;