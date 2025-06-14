import { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./componentes/PokemonCard";
import NavBar from "./componentes/NavBar";
interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

function App() {
  const [pokemones, setPokemones] = useState<Pokemon[]>([]);
  const [filtro, setFiltro] = useState("ver-todos");

  const tipos = [
    "normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison",
    "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "dragon", "steel", "fairy"
  ];

  useEffect(() => {
    const obtenerPokemones = async () => {
      const promesas = [];
      for (let i = 1; i <= 151; i++) {
        promesas.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
      }
      const resultados = await Promise.all(promesas);
      setPokemones(resultados);
    };

    obtenerPokemones();
  }, []);

  const pokemonesFiltrados = filtro === "ver-todos"
    ? pokemones
    : pokemones.filter(p => p.types.some(t => t.type.name === filtro));

  return (
    <div>
      <NavBar
        tipos={tipos}
        filtroActual={filtro}
        onFiltroSeleccionado={setFiltro}
      />

      <main>
        <div className="pokemon-todos">
          {pokemonesFiltrados.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              height={pokemon.height}
              weight={pokemon.weight}
              types={pokemon.types}
              image={pokemon.sprites.other["official-artwork"].front_default}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
