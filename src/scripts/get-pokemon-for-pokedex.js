import {
  getPokemonSpecies,
  getPokemonsById,
  createPokemonCardsHTML,
} from "./get-pokemon.js";

const previousButtons = document.querySelectorAll(
  ".pagination-button.previous"
);

const nextButtons = document.querySelectorAll(".pagination-button.next");

const pokedexPage =
  new URLSearchParams(window.location.search).get("page") ?? "0";

async function getPokedexPokemons() {
  //Récupération des Pokémons

  if (pokedexPage > Math.floor(1025 / 40)) {
    document.location.replace("../../pages/pokedex.html?page=0");
  }

  const data = await getPokemonSpecies(40, pokedexPage * 40);
  const pokemonSpecies = data.results;

  const pokedexGrid = document.getElementById("pokedex-grid");
  const pokemonsId = [];

  for (let i = 0; i < pokemonSpecies.length; i++) {
    pokemonsId.push(pokemonSpecies[i].url.split("/")[6]);
  }

  const pokemonsInfos = await getPokemonsById(pokemonsId);

  for (let i = 0; i < pokemonsInfos.length; i++) {
    const pokemonContainer = document.createElement("a");
    pokemonContainer.classList.add("pokemon-card-container");
    pokemonContainer.href =
      "../../pages/pokemon-details.html?id=" + pokemonsInfos[i].id;

    pokemonContainer.appendChild(
      createPokemonCardsHTML(pokemonsInfos[i], true)
    );

    pokedexGrid.appendChild(pokemonContainer);
  }

  document.getElementById("pokedex-loading").classList.add("hidden");
  document.getElementById("pokedex-wrapper").classList.remove("hidden");

  //Vérification des boutons
  if (pokedexPage == 0) {
    previousButtons.forEach((previousButton) => {
      previousButton.disabled = true;
    });
  } else if (pokedexPage >= Math.floor(1025 / 40)) {
    nextButtons.forEach((nextButton) => {
      nextButton.disabled = true;
    });
  }
}

function previousPage() {
  document.location.replace(
    "../pages/pokedex.html?page=" + (parseInt(pokedexPage) - 1)
  );
}

function nextPage() {
  document.location.replace(
    "../pages/pokedex.html?page=" + (parseInt(pokedexPage) + 1)
  );
}

previousButtons.forEach((previousButton) => {
  previousButton.addEventListener("click", previousPage);
});

nextButtons.forEach((nextButton) => {
  nextButton.addEventListener("click", nextPage);
});

getPokedexPokemons();
