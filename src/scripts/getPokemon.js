const apiurl = "https://pokeapi.co/api/v2/";

export async function getPokemonById(id) {
  try {
    const response = await fetch(apiurl + "pokemon/" + id);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json(); //tranfo rep en data
    return data;
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
  }
}

export async function getPokemonsById(list_number) {
  const all_pokemon = []; //pr stcoker les poke recupéréES
  for (const pokemon_id of list_number) {
    const pokemon = await getPokemonById(pokemon_id); //on recup id liées au num aléatoire
    all_pokemon.push(pokemon); //ajoute dans le tableau pokemons
  }

  return all_pokemon;
}

export function createPokemonCardsHTML(pokemon_infos, with_name) {
  console.log(pokemon_infos);
  const pokemon_card = document.createElement("pokemon-card");
  if (with_name) {
    pokemon_card.setAttribute("pokemon-name", pokemon_infos.name);
  }

  pokemon_card.setAttribute("pokemon-url", pokemon_infos.sprites.front_default);
  pokemon_card.setAttribute("pokemon-type", pokemon_infos.types[0].type.name);

  return pokemon_card;
}
