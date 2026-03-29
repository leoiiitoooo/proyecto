import { useState } from "react";
import { Link } from "react-router";
import type { ICarta } from "../types";
import ListaCartas from "../componentes/ListaCartas";
import {ModalCarta} from "../componentes/Modal";

interface HomeProps {
    cartas: ICarta[];
    eliminarCarta: (id: number) => void;
}

const Home = ({ cartas, eliminarCarta }: HomeProps) => {
    const [seleccionada, setSeleccionada] = useState<ICarta | null>(null);

    return (
        <div className="min-h-screen bg-neutral-950 from-orange-900/20 via-neutral-950 to-black text-white p-8">
            <header className="max-w-7xl mx-auto flex justify-between items-center mb-16">
                <h1 className="text-4xl font-black italic tracking-tighter uppercase text-white">Card<span className="text-orange-500">Play</span></h1>
                <Link to="/nuevo" className="bg-orange-600 hover:bg-orange-500 px-6 py-2 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)]">CREAR CARTA</Link>
            </header>
            <main className="max-w-7xl mx-auto">
                <ListaCartas cartas={cartas} onBorrar={eliminarCarta} onVerDetalles={setSeleccionada} />
            </main>
            <ModalCarta carta={seleccionada} onClose={() => setSeleccionada(null)} />
        </div>
    );
};
export default Home;