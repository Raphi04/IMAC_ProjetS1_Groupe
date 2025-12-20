import { getPokemonsById, createPokemonCardsHTML } from "./getPokemon.js";

function random_number(count, max, min) {
  let list_number = [];

  while (list_number.length < count) {
    const random_nb = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!list_number.includes(random_nb)) {
      list_number.push(random_nb);
    }
  }
  return list_number;
}
//liste_nombre à count nb aléaoitre différent stokés ss forme de tab

//Accueil
async function getRandomPokemons() {
  const random_pokemon = random_number(6, 1025, 1);
  const pokemons_infos = await getPokemonsById(random_pokemon);

  for (const pokemon_infos of pokemons_infos) {
    const pokemon_container = document.createElement("a");
    pokemon_container.href =
      "../../pages/pokemon_details.html?id=" + pokemon_infos.id;
    pokemon_container.classList.add("pokemon-card-container");
    pokemon_container.appendChild(createPokemonCardsHTML(pokemon_infos, true));

    document.getElementById("pokemon-grid").appendChild(pokemon_container);
  }
}

const search_pokemon_form = document.forms["search_pokemon"];

function search_pokemon(e) {
  e.preventDefault();
  let pokemon_id = search_pokemon_form.elements["pokemon_id"].value;

  if (pokemon_id == "") {
    pokemon_id = "1";
  }

  document.location.replace("./pages/pokemon_details.html?id=" + pokemon_id);
}

search_pokemon_form.addEventListener("submit", (e) => search_pokemon(e));

getRandomPokemons();
