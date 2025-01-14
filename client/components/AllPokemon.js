import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./AllPokemon";
import { Link } from "react-router-dom";

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchPokemons() {
            const { data } = await axios.get("/api/Pokemon");
            setPokemons(data);
            }

            fetchPokemons();
    }, []);

    return (
        <>
            <h1>Pokemon list</h1>
            <ul id="main">
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id}>
                        <Link to={`/Pokemon/${pokemon.id}`}>{pokemon.name}</Link> <br />
                    </li>
                ))}
            </ul>
        </>
    );
}