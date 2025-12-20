const apiurl = "https://pokeapi.co/api/v2/";

export async function getPokemonByIdInfosBattle(id) {
  try {
    const response_data_battle = await fetch(apiurl + "pokemon/" + id);  // Contient les données de "combat" (stats, types, moves, sprites).

    if (!response_data_battle.ok) {
      throw new Error(`Erreur HTTP : ${response_data_battle.status}`);
    }


    const data_battle = await response_data_battle.json(); //tranfo rep en data


    return data_battle;
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
  }
}

export async function getPokemonByIdInfosOrganic(id) {
  try {
    const response_data_organic = await fetch(apiurl + "pokemon-species/" + id); // Contient les données de "biologie" (descriptions, lignée d'évolution, bonheur de base, couleur, etc.).
    if (!response_data_organic.ok) {
      throw new Error(`Erreur HTTP : ${response_data_organic.status}`);
    }


    const data_organic = await response_data_organic.json(); //tranfo rep en data


    return data_organic;
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
  }
}
export async function getPokemonsById(list_number) {
  const all_pokemon = []; //pr stcoker les poke recupéréES
  for (const pokemon_id of list_number) {
    const pokemon = await getPokemonByIdInfosBattle(pokemon_id); //on recup id liées au num aléatoire
    all_pokemon.push(pokemon); //ajoute dans le tableau pokemons
  }

  return all_pokemon;
}

export async function getPokemonSpecies(limit, offset) {
   try {
    const response = await fetch(apiurl + "pokemon-species/?limit=" + limit + "&offset=" + offset);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
  } 
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
