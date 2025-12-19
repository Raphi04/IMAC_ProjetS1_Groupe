const getPokemonId = () => {
  const input = new URLSearchParams(window.location.search);
  return input.get("id");
};
displayPokemon();
