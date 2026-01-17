import { useState } from "react";

const [card, setCar] = useState({
    name: "",
    descripcion: "",
    attack: 0,
    defense: 0,
    type: "",
    image: "",
});

<input
    type="text"
    placeholder="Nombre"
    className="border border-indigo-500 outline-0 focus:border-indigo-700 rounded-md p-2 w-full max-w-md"
    value={card.name}
    onChange={(e) => setCar({...card, name: e.target.value})}
    />
    <button className=" bg-indigo-500 hover:bg-indigo-700 text  "