import React, { useState, useEffect } from "react";

const gqlQuery = `query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    abilities {
      ability {
        name
      }
    }
    types {
      type {
        name
      }
    }
    stats {
      base_stat
      stat {
        name
      }
    }
    message
    status
  }
}`;

export default function PokemonDetails({ pokemonNames }) {
  const [pokemons, setPokemons] = useState([]);
  const pokemonName = pokemonNames;
  useEffect(() => {
    pokemonName.forEach((name) => {
      fetch("https://graphql-pokeapi.graphcdn.app/", {
        credentials: "omit",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: gqlQuery,
          variables: { name },
        }),
        method: "POST",
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("Response from server", res);
          setPokemons((prevPokemons) => [...prevPokemons, res.data.pokemon]);
        });
    });
  }, [pokemonNames]);

  return (
    <div>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
