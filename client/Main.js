import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllPokemon from "./components/AllPokemon";
import AllTrainers from "./components/AllTrainers";
import SingularPokemon from "./components/SingularPokemon";
import SingularTrainer from "./components/SingularTrainer";

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
    <Router>
      <h1>Pokedex</h1>
      <div>
      <Route exact path = "/api/Pokemon">
        <AllPokemon pokemon={pokemon}/>
      </Route>
      <Route exact path = "/api/trainer">
        <AllTrainers/>
      </Route>
      <Route exact path="/api/Pokemon/:id">
        <SingularPokemon/>
      </Route>
      <Route exact path="/api/trainer/:id">
        <SingularTrainer/>
      </Route>
      </div>
    </Router>
  );
};

export default Main;