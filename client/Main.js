import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const { data } = await axios.get("/api/pokemon");
      setPokemon(data);
    }

    fetchPokemon();
  }, []);

  return (
    <>
      <h1>Pokedex</h1>
      <ul id="main">
        {pokemon.map((pokemon) => (
          <li>
            {pokemon.name} 
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;