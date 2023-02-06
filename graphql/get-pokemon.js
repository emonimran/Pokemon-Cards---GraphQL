import React, { useState, useEffect } from "react";

const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      url
      name
      image
    }
  }
}`;

const gqlVariables = {
  limit: 10,
  offset: 9,
};

export default function GetPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    fetch("https://graphql-pokeapi.graphcdn.app/", {
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: gqlQuery,
        variables: gqlVariables,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Response from server", res.data.pokemons.results);

        setPokemons(res.data.pokemons.results);
        setPokemonNames(
          res.data.pokemons.results.map((pokemon) => pokemon.name)
        );
        console.log("Pokemon Names", pokemonNames);
      });
  }, []);

  return (
    <div>
      <ul>
        {pokemonNames.map((name, index) => (
          <Pokemons key={index} pokemonNames={name} />
        ))}
      </ul>
    </div>
  );
}
