import { useState } from "react";
import type { ICarta } from "../types";
import Carta from "./Carta";

type Props = {
  mazo: ICarta[];
};

export function SeleccionarCartas({ mazo }: Props) {
  const [cartaSeleccionada1, setCartaSeleccionada1] = useState<ICarta | null>(
    null,
  );
  const [cartaSeleccionada2, setCartaSeleccionada2] = useState<ICarta | null>(
    null,
  );
  const [listoBatalla, setListoBatalla] = useState<boolean>(false);

  const handleSeleccionarCarta = (carta: ICarta) => {
    const isSelected1 = cartaSeleccionada1?.idCard === carta.idCard;
    const isSelected2 = cartaSeleccionada2?.idCard === carta.idCard;

    if (isSelected1) {
      setCartaSeleccionada1(null);
      setListoBatalla(false);
      return;
    }

    if (isSelected2) {
      setCartaSeleccionada2(null);
      setListoBatalla(false);
      return;
    }

    if (!cartaSeleccionada1) {
      setCartaSeleccionada1(carta);
      if (cartaSeleccionada2) setListoBatalla(true);
    } else if (!cartaSeleccionada2) {
      setCartaSeleccionada2(carta);
      setListoBatalla(true);
    }
  };

  return(
    
      mazo &&
        mazo.map((carta) => {
          return (
            <div 
              onClick={() => {
                handleSeleccionarCarta(carta);
              }}
              key={carta.idCard}
            >
              
            
              <Carta
                carta={carta}
                color={carta.attributes.color}
                ancho={260}
                alto={360}
                seleccionada={
                  cartaSeleccionada1?.idCard === carta.idCard ||
                  cartaSeleccionada2?.idCard === carta.idCard
                }
                selectionMode={true}
              />
            </div>
          );
        })
      
    
  )
}
