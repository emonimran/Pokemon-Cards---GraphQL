import { useRouter } from "next/router";
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

function Pokemons() {
  const router = useRouter();
  const pokemonDetails = router.query.pokemonName;
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    if (pokemonDetails) {
      fetch("https://graphql-pokeapi.graphcdn.app/", {
        credentials: "omit",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: gqlQuery,
          variables: { name: pokemonDetails },
        }),
        method: "POST",
      })
        .then((res) => res.json())
        .then((res) => {
          setPokemonData(res.data);
          console.log("Response from server", res);
        });
    }
  }, [pokemonDetails]);

  console.log(pokemonData);

  return (
    <div>
      {pokemonData.pokemon ? (
        <>
          <h1>{pokemonData.pokemon.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.pokemon.id}.png`}
            alt={pokemonData.pokemon.name}
            width={200}
            height={200}
            className="bg-slate-200 rounded-lg"
          />
          <ul>
            {pokemonData.pokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
          <ul>
            {pokemonData.pokemon.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
          <ul>
            {pokemonData.pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Pokemons;
