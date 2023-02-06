return (
  <div className={styles.pokemon_container}>
    <div className="flex items-center justify-center pt-6">
      <Image src={logo} alt="logo" />
    </div>
    <div className="grid grid-cols-5 gap-4 mx-20 mt-10">
      {Object.values(pokemonDetails).map((pokemon) => (
        <div key={pokemon.id} className={styles.pokemon_card}>
          <h1>ID: {pokemon.id}</h1>
          <h1>Name: {pokemon.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
            width={200}
            height={200}
            className="bg-slate-200 rounded-lg"
          />
          <h1>Abilities:</h1>
          {pokemon.abilities.map((ability) => (
            <h2 key={ability.ability.name}>{ability.ability.name}</h2>
          ))}
          <h1>Types:</h1>
          {pokemon.types.map((type) => (
            <h2 key={type.type.name}>{type.type.name}</h2>
          ))}
          <h1>Stats:</h1>
          {pokemon.stats.map((stat) => (
            <h2 key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </h2>
          ))}
        </div>
      ))}
    </div>
  </div>
);
