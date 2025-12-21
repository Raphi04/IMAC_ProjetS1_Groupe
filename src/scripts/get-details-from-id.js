import {
  getPokemonByIdInfosBattle,
  getPokemonByIdInfosOrganic,
} from "./get-pokemon.js";

async function displayPokemonDetails() {
  const pokemonId = new URLSearchParams(window.location.search).get("id");
  const pokemonInfosBattle = await getPokemonByIdInfosBattle(pokemonId);
  const pokemonInfosOrganic = await getPokemonByIdInfosOrganic(pokemonId);

  const pokemonDetailsHead = document.getElementById("pokemon-details-head");
  const pokemonDetailsInfos = document.getElementById("pokemon-details-infos");

  createPokemonNameHTML(pokemonInfosBattle, pokemonDetailsHead);
  createPokemonImageHTML(pokemonInfosBattle, pokemonDetailsHead);

  createPokemonDescriptionHTML(pokemonInfosOrganic, pokemonDetailsInfos);
  createPokemonTypesHTML(pokemonInfosBattle, pokemonDetailsInfos);
  createPokemonStatsHTML(pokemonInfosBattle, pokemonDetailsInfos);
  createPokemonMorphologyHTML(pokemonInfosBattle, pokemonDetailsInfos);
}

// Le nom du Pokémon
function createPokemonNameHTML(pokemonInfosBattle, pokemonDetailsContainer) {
  const pokemonName = document.createElement("h2");
  pokemonName.innerText = pokemonInfosBattle.name;
  pokemonDetailsContainer.appendChild(pokemonName);
}

// L'image du Pokémon
function createPokemonImageHTML(pokemonInfosBattle, pokemonDetailsContainer) {
  const pokemonCard = document.createElement("pokemon-card");
  pokemonCard.setAttribute(
    "pokemon-url",
    pokemonInfosBattle.sprites.front_default
  );
  pokemonCard.setAttribute(
    "pokemon-type",
    pokemonInfosBattle.types[0].type.name
  );
  pokemonDetailsContainer.appendChild(pokemonCard);
}

// la description du pokémon
function createPokemonDescriptionHTML(
  pokemonInfosOrganic,
  pokemonDetailsContainer
) {
  const pokemonDescriptionContainer = document.createElement("div");
  const pokemonDescriptionTitle = document.createElement("h3");
  pokemonDescriptionTitle.innerText = "Description";
  pokemonDescriptionContainer.appendChild(pokemonDescriptionTitle);

  const pokemonDescription = document.createElement("p");

  // la description du pokémon
  const pokemonDescriptionText = pokemonInfosOrganic.flavor_text_entries
    .find((entry) => entry.language.name === "en")
    .flavor_text.replace(/[\n\f]/g, " "); // Remplace les sauts de ligne par des espaces

  pokemonDescription.textContent = pokemonDescriptionText;
  pokemonDescriptionContainer.appendChild(pokemonDescription);

  pokemonDetailsContainer.appendChild(pokemonDescriptionContainer);
}

// La div du type du Pokémon
function createPokemonTypesHTML(pokemonInfosBattle, pokemonDetailsContainer) {
  const pokemonTypesValue = [];
  pokemonInfosBattle.types.forEach((type) => {
    pokemonTypesValue.push(type.type.name);
  });

  const pokemonTypesContainer = document.createElement("div");

  // Le titre de la div du type du Pokémon
  const pokemonTypesTitle = document.createElement("h3");

  if (pokemonTypesValue.length === 1) {
    pokemonTypesTitle.innerText = "Pokémon Type";
  } else {
    pokemonTypesTitle.innerText = "Pokémon Types";
  }

  pokemonTypesContainer.appendChild(pokemonTypesTitle);

  // Les types du Pokémon
  const pokemonTypes = document.createElement("p");

  pokemonTypes.innerText = pokemonTypesValue.join(", ");
  pokemonTypesContainer.appendChild(pokemonTypes);

  pokemonDetailsContainer.appendChild(pokemonTypesContainer);
}

// La div des stats du Pokémon
function createPokemonStatsHTML(pokemonInfosBattle, pokemonDetailsContainer) {
  const pokemonStatsContainer = document.createElement("div");

  // Le titre de la div des stats du Pokémon
  const pokemonStatsTitle = document.createElement("h3");
  pokemonStatsTitle.innerText = "Statistics";
  pokemonStatsContainer.appendChild(pokemonStatsTitle);

  const pokemonStatsList = document.createElement("ul");
  pokemonStatsContainer.appendChild(pokemonStatsList);

  // Les stats du Pokémon
  pokemonInfosBattle.stats.forEach((stat) => {
    const pokemonStat = document.createElement("li");
    pokemonStat.innerText = stat.stat.name + ": " + stat.base_stat;
    pokemonStatsList.appendChild(pokemonStat);
  });
  pokemonDetailsContainer.appendChild(pokemonStatsContainer);
}

// La div de la morphologie du Pokémon
function createPokemonMorphologyHTML(
  pokemonInfosBattle,
  pokemonDetailsContainer
) {
  const pokemonMorphologyContainer = document.createElement("div");

  // Le titre de la div de la morphologie du Pokémon
  const pokemonMorphologyTitle = document.createElement("h3");
  pokemonMorphologyTitle.innerText = "Morphology";
  pokemonMorphologyContainer.appendChild(pokemonMorphologyTitle);

  const pokemonMorphologyList = document.createElement("ul");
  pokemonMorphologyContainer.appendChild(pokemonMorphologyList);

  // La morphologie du Pokémon
  const pokemonMorphologyHeight = document.createElement("li");
  pokemonMorphologyHeight.innerHTML =
    "Height : " + pokemonInfosBattle.height / 10 + "m";
  pokemonMorphologyList.appendChild(pokemonMorphologyHeight);

  const pokemonMorphologyWeight = document.createElement("li");
  pokemonMorphologyWeight.innerHTML =
    "Weight : " + pokemonInfosBattle.weight / 10 + "kg";
  pokemonMorphologyList.appendChild(pokemonMorphologyWeight);

  pokemonDetailsContainer.appendChild(pokemonMorphologyContainer);
}

displayPokemonDetails();
