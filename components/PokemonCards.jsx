import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

function PokemonCards({ pokemonDetails, isSmallScreen }) {
  return (
    <div>
      {!isSmallScreen ? (
        <div className="grid md:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3 gap-8 md:mx-20 mx-8 mt-10">
          {Object.values(pokemonDetails).map((pokemon) => (
            <Link href={`/pokemons/${pokemon.name}`} key={pokemon.id}>
              <div
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
            </Link>
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
              <Link href={`/pokemons/${pokemon.name}`} key={pokemon.id}>
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
              </Link>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default PokemonCards;
