import { Route, Routes } from "react-router";
import Home from "./pages/home";
import {
  toCardApiMapper,
  type ICarta,
  type IApiCard,
  toApiCardMapper,
} from "./types";
import { useEffect, useState } from "react";
import { FormularioCarta } from "./pages/crear";
import { ActualizarCarta } from "./pages/update";
import { SeleccionarCartas } from "./componentes/seleccionarCartas";

const API_URL = import.meta.env.VITE_EDUCA_API_URL;

function App() {
  const [cartas, setCartas] = useState<ICarta[]>([]);

  const fetchCartas = async () => {
    try {
      console.log("Fetching cartas from API...", API_URL);
      const response = await fetch(`${API_URL}/card`, {
        headers: {
          usersecretpasskey: "Leon447498OR",
        },
      });

      const data = (await response.json()) as { data: IApiCard[] };
      console.log(data);
      const cartasFromApi: IApiCard[] = data.data;
      const cartasMapped: ICarta[] = cartasFromApi.map(toCardApiMapper);
      console.log(cartasMapped);
      setCartas(cartasMapped);
    } catch (e) {
      console.error("Error fetching cartas:", e);
    } finally {
    }
  };

  useEffect(() => {
    fetchCartas();
  }, []);

  const onCrear = async (nuevaCarta: ICarta) => {
    try {
      const apiCard = toApiCardMapper(nuevaCarta);
      const response = await fetch(`${API_URL}/card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          usersecretpasskey: "Leon447498OR",
        },
        body: JSON.stringify(apiCard),
      });

      if (response.ok) {
        console.log("¡Carta creada con éxito!");
        await fetchCartas(); // Recargamos la lista para ver la nueva carta
      }
    } catch (error) {
      console.error("Error en la conexión al crear:", error);
    }
  };

  const deleteCarta = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/card/${id}`, {
        method: "DELETE",
        headers: { usersecretpasskey: "Leon447498OR" },
      });

      if (!response.ok) {
        throw new Error("Error al eliminar la carta");
      }

      await fetchCartas(); // Recargamos la lista
      return { success: true };
    } catch (e) {
      console.error("Error deleting carta:", e);
      return { success: false, error: e };
    }
  };

  const updateCarta = async (id: number, carta: ICarta) => {
    try {
      console.log("Enviando datos a la API:", toApiCardMapper(carta));
      const response = await fetch(`${API_URL}/card/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          usersecretpasskey: "Leon447498OR",
        },
        body: JSON.stringify(toApiCardMapper(carta)),
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }

      console.log("Actualización exitosa");
      await fetchCartas();
      return { success: true };
    } catch (e) {
      console.error("Error al actualizar la carta:", e);
      return { success: false, error: e };
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home cartas={cartas} eliminarCarta={deleteCarta} />}
      />
      <Route path="/nuevo" element={<FormularioCarta onCrear={onCrear} />} />
      <Route
        path="/actualizar/:id"
        element={<ActualizarCarta cartas={cartas} onActualizar={updateCarta} />}
      />
      <Route
        path="/seleccionar-cartas"
        element={<SeleccionarCartas mazo={cartas} />}
      />
    </Routes>
  );
}

export default App;
