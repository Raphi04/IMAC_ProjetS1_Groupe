import { getPokemonsById, createPokemonCardsHTML } from "./getPokemon.js";

function randomNumber(count, max, min) {
  let listNumber = [];

  while (listNumber.length < count) {
    const randomNb = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!listNumber.includes(randomNb)) {
      listNumber.push(randomNb);
    }
  }
  return listNumber;
}
//liste_nombre à count nb aléaoitre différent stokés ss forme de tab

//Accueil
async function getRandomPokemons() {
  const randomPokemon = randomNumber(6, 1025, 1);
  const pokemonsInfos = await getPokemonsById(randomPokemon);

  for (const pokemonInfos of pokemonsInfos) {
    const pokemonContainer = document.createElement("a");
    pokemonContainer.href =
      "../../pages/pokemon-details.html?id=" + pokemonInfos.id;
    pokemonContainer.classList.add("pokemon-card-container");
    pokemonContainer.appendChild(createPokemonCardsHTML(pokemonInfos, true));

    document.getElementById("pokemon-grid").appendChild(pokemonContainer);
  }
}

const searchPokemonForm = document.forms["searchPokemon"];

function searchForPokemon(e) {
  e.preventDefault();
  let pokemonId = searchPokemonForm.elements["pokemonId"].value;

  if (pokemonId == "") {
    pokemonId = "1";
  }

  document.location.replace("./pages/pokemon-details.html?id=" + pokemonId);
}

searchPokemonForm.addEventListener("submit", (e) => searchForPokemon(e));

getRandomPokemons();
