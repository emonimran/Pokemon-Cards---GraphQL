import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import logo from "../assets/media_assets/Logo.png";
import Image from "next/image";
import useMediaQuery from "../components/hooks/useMediaQuery";

import PokemonCards from "./PokemonCards";

const gqlQuery = `
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        image
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

function PokemonContainer() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
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
      setPokemonData(
        data.data.pokemons.results.map((pokemon) => ({
          name: pokemon.name,
          image: pokemon.image,
        }))
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

  const allDetails = Object.values(pokemonDetails).map((pokemonDetail) => {
    let pokemonName = pokemonNames.find(
      (pokemon) => pokemon.name === pokemonDetail.name
    );
    return {
      name: pokemonDetail.name,
      image: pokemonName ? pokemonName.image : null,
      id: pokemonDetail.id,
      abilities: pokemonDetail.abilities,
      types: pokemonDetail.types,
      stats: pokemonDetail.stats,
    };
  });

  console.log("Pokemons", pokemonNames);
  console.log("Pokemon Data", pokemonData);
  console.log("Pokemon Details", pokemonDetails);
  console.log("All Pokemon Details", allDetails);

  const isSmallScreen = useMediaQuery("(max-width: 430px)");
  const isLargeScreen = useMediaQuery("(min-width: 1060px)");
  const isAboveMediumScreen = useMediaQuery("(min-width: 770px)");

  return (
    <div
      className={`${styles.pokemon_container} w-full md:h-[900px] md:h-[900px] sm:h-[1220px] xs:h-[1480px] h-[550px]`}
    >
      <div className="flex items-center justify-center pt-6 z-40">
        <Image src={logo} alt="logo" />
      </div>
      <PokemonCards
        pokemonDetails={pokemonDetails}
        isSmallScreen={isSmallScreen}
      />
    </div>
  );
}

export default PokemonContainer;
