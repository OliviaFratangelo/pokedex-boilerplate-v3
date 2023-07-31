import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Trainer() {
  const [trainer, setTrainer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchTrainerDetails() {
      try {
        const { data } = await axios.get(`/api/trainer/${id}`);
        setTrainer(data);
      } catch (error) {
        console.error("Error fetching trainer:", error);
        setTrainer(null);
      }
    }

    fetchTrainerDetails();
  }, [id]);

  return (
    <div>
      <h2>{trainer.firstName}</h2>
      <img src={trainer.image} />
      <ul>
        {trainer.Pokemons.map((pokemon) => (
          <ul key={pokemon.id}>
            <li>
              {pokemon.name} - {pokemon.type} - {pokemon.trainer}
            </li>
            <li>
              <img src={pokemon.image} />
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
}