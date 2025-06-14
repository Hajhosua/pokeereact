// src/components/PokemonCard.tsx
import React from "react";

interface PokemonCardProps {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  image: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, height, weight, types, image }) => {
  return (
    <div className="pokemon">
      <p className="pokemon-id-back">#{id.toString().padStart(3, "0")}</p>
      <div className="pokemon-imagen">
        <img src={image} alt={name} />
      </div>
      <div className="pokemon-info">
        <div className="nombre-contenedor">
          <p className="pokemon-id">#{id.toString().padStart(3, "0")}</p>
          <h2 className="pokemon-nombre">{name}</h2>
        </div>
        <div className="pokemon-tipos">
          {types.map((t) => (
            <p key={t.type.name} className={`${t.type.name} tipo`}>
              {t.type.name.toUpperCase()}
            </p>
          ))}
        </div>
        <div className="pokemon-stats">
          <p className="stat">{height}m</p>
          <p className="stat">{weight}kg</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
