import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Sidebar from "../../assets/media_assets/Left.png";
import useMediaQuery from "../../components/hooks/useMediaQuery";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import logo from "../../assets/media_assets/Logo.png";
import Link from "next/link";

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
    height
    weight
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
  const isSmallScreen = useMediaQuery("(max-width: 430px)");
  const isMediumScreen = useMediaQuery("(max-width: 770px)");

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

  return (
    <div className="xs:flex w-[100vw]">
      {" "}
      {!isSmallScreen ? (
        <Image src={Sidebar} alt="sidebar" className="w-[6%]"></Image>
      ) : (
        ""
      )}
      <div className="bg-white xs:w-[88%] w-[100%] sm:py-16 py-10">
        {/* Heading */}

        <div className="flex items-center justify-center">
          <Image src={logo} alt="logo" />
        </div>

        {pokemonData.pokemon ? (
          <div className="mx-8 sm:flex sm:justify-center sm:mt-14">
            {/* Image Section */}
            <div className="sm:order-2 sm:w-1/3 flex items-center justify-center">
              <div className="">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.pokemon.id}.png`}
                  alt={pokemonData.pokemon.name}
                  width={300}
                  height={300}
                  className="rounded-lg cursor-pointer hover:scale-125 transition duration-500"
                />
                {!isMediumScreen ? (
                  <div className="w-full flex items-center justify-center">
                    <Link href="/">
                      <button className="bg-yellow text-white border-4 border-blue py-4 px-8 sm:mt-36 font-semibold">
                        Back to Homepage
                      </button>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="sm:order-1 sm:w-1/3 sm:mt-0 mt-14">
              <h1 className="capitalize text-blue font-medium text-4xl mb-4">
                {pokemonData.pokemon.name} #{pokemonData.pokemon.id}
              </h1>
              <h3>
                There is a plant seed on its back right from the day this
                Pokémon is born. The seed slowly grows larger.
              </h3>
              <div className="sm:block flex items-center justify-center">
                <div
                  className={`mt-10 text-black rounded-lg ${styles.stats_outside}`}
                >
                  <div
                    className={`rounded-lg ${styles.stats_inside} flex items-center justify-evenly`}
                  >
                    <div className={`grid grid-cols-2 gap-6`}>
                      <div>
                        <h1 className="font-medium text-xl">Height</h1>
                        <p>{pokemonData.pokemon.height}`</p>
                      </div>

                      <div>
                        <h1 className="font-medium text-xl">Weight</h1>
                        <p>{pokemonData.pokemon.weight} lbs</p>
                      </div>

                      <div>
                        <h1 className="font-medium text-xl">Abilities</h1>
                        <ul>
                          {pokemonData.pokemon.abilities.map((ability) => (
                            <li key={ability.ability.name}>
                              -{ability.ability.name}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h1 className="font-medium text-xl">Types</h1>
                        <ul>
                          {pokemonData.pokemon.types.map((type) => (
                            <li key={type.type.name}>-{type.type.name}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:order-3 sm:w-1/3 sm:mt-0 mt-14">
              <div>
                <h1 className="font-medium text-xl mb-4">Type</h1>
                <div className="flex items-center justify-start">
                  {pokemonData.pokemon.types.map((type) => {
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
              <div className="mt-8">
                <h1 className="font-medium text-xl mb-4">Stats</h1>

                <ul>
                  {pokemonData.pokemon.stats.map((stat) => (
                    <div key={stat.stat.name} className="mb-4">
                      <h1 className="font-medium text-base uppercase mb-2">
                        {stat.stat.name}:
                      </h1>

                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue h-2.5 rounded-full"
                          style={{ width: `${stat.base_stat}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            {isMediumScreen ? (
              <div className="w-full mt-10 flex items-center justify-center">
                <Link href="/">
                  <button className="bg-yellow text-white border-4 border-blue py-4 px-8 sm:mt-36 font-semibold">
                    Back to Homepage
                  </button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center space-x-2 mt-52">
              <div
                className="spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full"
                role="status"
              ></div>
            </div>

            <h1 className="font-semibold text-2xl text-center">...Loading</h1>
          </>
        )}
      </div>
      {!isSmallScreen ? (
        <Image src={Sidebar} alt="sidebar" className="w-[6%]"></Image>
      ) : (
        ""
      )}
    </div>
  );
}

export default Pokemons;
