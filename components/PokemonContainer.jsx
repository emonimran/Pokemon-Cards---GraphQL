import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../assets/media_assets/Logo.png";
import Image from "next/image";
import useMediaQuery from "../components/hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

import "swiper/css/navigation";

import { useState, useEffect } from "react";

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

  let slide;

  if (isLargeScreen) {
    slide = 5;
  } else if (isSmallScreen) {
    slide = 2;
  } else if (isAboveMediumScreen) {
    slide = 4;
  } else {
    slide = 4;
  }

  return (
    <div
      className={`${styles.pokemon_container} w-full md:h-[900px] md:h-[900px] sm:h-[1220px] xs:h-[1480px] h-[550px]`}
    >
      <div className="flex items-center justify-center pt-6 z-40">
        <Image src={logo} alt="logo" />
      </div>
      {!isSmallScreen ? (
        <div className="grid md:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3 gap-8 md:mx-20 mx-8 mt-10">
          {Object.values(pokemonDetails).map((pokemon) => (
            <>
              <div
                key={pokemon.id}
                className={`text-black hover:text-white hover:bg-blue transition duration-300 rounded-lg ${styles.pokemon_card} w-[230px] h-[300px]`}
              >
                <div className="relative">
                  <div className="rounded-lg bg-slate-100 ">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                      alt={pokemon.name}
                      className="w-52 h-52 hover:scale-110 transition duration-500"
                    />
                  </div>
                  <h1 className="absolute top-3 left-3 text-sm text-black hover:text-black">
                    #{pokemon.id}
                  </h1>
                  <h1 className="text-base capitalize font-medium my-2">
                    {pokemon.name}
                  </h1>

                  <div className="flex">
                    {pokemon.types.map((type) => {
                      let backgroundColor;
                      switch (type.type.name) {
                        case "fire":
                          backgroundColor = "bg-fire";
                          break;
                        case "bug":
                          backgroundColor = "bg-bug";
                          break;
                        case "poison":
                          backgroundColor = "bg-poison";
                          break;
                        case "flying":
                          backgroundColor = "bg-flying";
                          break;
                        case "normal":
                          backgroundColor = "bg-normal";
                          break;
                        default:
                          backgroundColor = "bg-gray";
                      }
                      return (
                        <h2
                          key={type.type.name}
                          className={`px-4 py-1 rounded-xl mr-2 text-white capitalize text-sm ${backgroundColor}`}
                        >
                          {type.type.name}
                        </h2>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      ) : (
        <div className="mx-4 mt-14">
          <Swiper
            modules={[Navigation]}
            spaceBetween={5}
            slidesPerView={1.4}
            navigation={{ clickable: true }}
            className="h-80 mx-4"
          >
            {Object.values(pokemonDetails).map((pokemon) => (
              <>
                <SwiperSlide>
                  <div
                    key={pokemon.id}
                    className={`text-black hover:text-white hover:bg-blue transition duration-300 rounded-lg ${styles.pokemon_card} w-[230px] h-[300px]`}
                  >
                    <div className="relative">
                      <div className="rounded-lg bg-slate-100 ">
                        <img
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                          alt={pokemon.name}
                          className="w-52 h-52 hover:scale-110 transition duration-500"
                        />
                      </div>
                      <h1 className="absolute top-3 left-3 text-sm text-black hover:text-black">
                        #{pokemon.id}
                      </h1>
                      <h1 className="text-base capitalize font-medium my-2">
                        {pokemon.name}
                      </h1>

                      <div className="flex">
                        {pokemon.types.map((type) => {
                          let backgroundColor;
                          switch (type.type.name) {
                            case "fire":
                              backgroundColor = "bg-fire";
                              break;
                            case "bug":
                              backgroundColor = "bg-bug";
                              break;
                            case "poison":
                              backgroundColor = "bg-poison";
                              break;
                            case "flying":
                              backgroundColor = "bg-flying";
                              break;
                            case "normal":
                              backgroundColor = "bg-normal";
                              break;
                            default:
                              backgroundColor = "bg-gray";
                          }
                          return (
                            <h2
                              key={type.type.name}
                              className={`px-4 py-1 rounded-xl mr-2 text-white capitalize text-sm ${backgroundColor}`}
                            >
                              {type.type.name}
                            </h2>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default PokemonContainer;
