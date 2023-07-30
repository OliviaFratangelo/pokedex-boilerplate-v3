import React, { useState, useEffect } from "react";
import axios from "axios";

const AllPokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        axios.get("/api/Pokemon").then((response) => {
            setPokemonList(response.data);
        });
    }, []);

    return (
        <div>
          <h2>All Pokemon</h2>
          <ul>
            {pokemonList.map((pokemon) => (
              <li key={pokemon.id}>
                <img src={pokemon.image} alt={pokemon.name} />
                {pokemon.name} - {pokemon.type}
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default AllPokemon;
