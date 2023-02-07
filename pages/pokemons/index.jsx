import React, { useState, useEffect } from "react";

const gqlQuery = `
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
      }
    }
  }
`;

const gqlQueryDetails = `
  query pokemon($name: String!) {
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
    }
  }
`;

const gqlVariables = {
  limit: 10,
  offset: 9,
};

export default function PokemonsDefault() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    const fetchPokemonNames = async () => {
      const res = await fetch("https://graphql-pokeapi.graphcdn.app/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: gqlQuery,
          variables: gqlVariables,
        }),
      });
      const data = await res.json();
      setPokemonNames(
        data.data.pokemons.results.map((pokemon) => pokemon.name)
      );
    };

    fetchPokemonNames();
  }, []);

  useEffect(() => {
    const fetchPokemonDetails = async (name) => {
      if (!pokemonDetails[name]) {
        const res = await fetch("https://graphql-pokeapi.graphcdn.app/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: gqlQueryDetails,
            variables: { name },
          }),
        });
        const data = await res.json();
        setPokemonDetails((prevDetails) => ({
          ...prevDetails,
          [name]: data.data.pokemon,
        }));
      }
    };

    pokemonNames.forEach(fetchPokemonDetails);
  }, [pokemonNames, pokemonDetails]);

  console.log("Pokemons", pokemonNames);
  console.log("Pokemon Details", pokemonDetails);

  return (
    <ul>
      {pokemonNames.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
