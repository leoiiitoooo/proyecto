export interface ICarta {
  attributes: any;
  idCard: any;
    id: number;
    vida: number;
    nombre: string;
    imagen: string;
    descripcion: string;
    fuerza: number;
    defensa: number;
    onClick: () => void;
    onBorrar?: (id: number) => void;
     onActualizar: (id: number, carta: ICarta) => void;
}

export interface HomeProps {
  cartas: ICarta[];
  eliminarCarta: (id: number) => void;
}

export interface ModalProps {
  carta: ICarta | null; // Recibe la carta seleccionada o null si está cerrado
  onClose: () => void; // Función para cerrar el modal
}

export interface ListaCartasProps {
  cartas: ICarta[];
  onBorrar: (id: number) => void;
}

export interface IApiCard {
  idCard: string;
  name: string;
  description: string;
  attack: number;
  defense: number;
  lifePoints: number;
  pictureUrl: string;
  attributes: {
    tipo?: string;
    habilidadUltimate?: string;
    anime?: string;
  };
  userSecret: string;
  createdAt: string;
  updatedAt: null | string;
}

export const toApiCardMapper = (carta: ICarta) => {
  return {
    name: carta.nombre,
    description: carta.descripcion,
    pictureUrl: carta.imagen || "https://via.placeholder.com/150",
    lifePoints: Number(carta.vida),
    attack: Number(carta.fuerza),
    defense: Number(carta.defensa),
    attributes: {
    }
  };
};

export const toCardApiMapper = (apiCard: IApiCard): ICarta => ({
  id: parseInt(apiCard.idCard),
  nombre: apiCard.name,
  descripcion: apiCard.description,
  fuerza: apiCard.attack,
  defensa: apiCard.defense,
  vida: apiCard.lifePoints,
  imagen: apiCard.pictureUrl,
  onClick: () => {},
  onActualizar: () => {}
});