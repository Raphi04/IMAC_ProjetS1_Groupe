import { getPokemonById } from "./getPokemon.js";

async function displayPokemonDetails() {
  const pokemon_id = new URLSearchParams(window.location.search).get("id");
  const pokemon_infos = await getPokemonById(pokemon_id);

  const pokemon_details_head = document.getElementById("pokemon-details-head");
  const pokemon_details_infos = document.getElementById("pokemon-details-infos");

  createPokemonNameHTML(pokemon_infos, pokemon_details_head);
  createPokemonImageHTML(pokemon_infos, pokemon_details_head);

  createPokemonTypesHTML(pokemon_infos, pokemon_details_infos);
  createPokemonStatsHTML(pokemon_infos, pokemon_details_infos);
  createPokemonMorphologyHTML(pokemon_infos, pokemon_details_infos);
}

// Le nom du Pokémon
function createPokemonNameHTML(pokemon_infos, pokemon_details_container) {
  const pokemon_name = document.createElement("h2");
  pokemon_name.innerText = pokemon_infos.name;
  pokemon_details_container.appendChild(pokemon_name);
}

// L'image du Pokémon
function createPokemonImageHTML(pokemon_infos, pokemon_details_container) {
  const pokemon_card = document.createElement("pokemon-card");
  pokemon_card.setAttribute("pokemon-url", pokemon_infos.sprites.front_default);
  pokemon_card.setAttribute("pokemon-type", pokemon_infos.types[0].type.name);
  pokemon_details_container.appendChild(pokemon_card);
}

// La div du type du Pokémon
function createPokemonTypesHTML(pokemon_infos, pokemon_details_container) {
  const pokemon_types_container = document.createElement("div");

  // Le titre de la div du type du Pokémon
  const pokemon_types_title = document.createElement("h2");
  pokemon_types_title.innerText = "Pokémon Type(s)";
  pokemon_types_container.appendChild(pokemon_types_title);

  // Les types du Pokémon
  const pokemon_types = document.createElement("p");

  const pokemon_types_value = [];
  pokemon_infos.types.forEach((type) => {
    pokemon_types_value.push(type.type.name);
  });
  pokemon_types.innerText = pokemon_types_value.join(", ");
  pokemon_types_container.appendChild(pokemon_types);

  pokemon_details_container.appendChild(pokemon_types_container);
}

// La div des stats du Pokémon
function createPokemonStatsHTML(pokemon_infos, pokemon_details_container) {
  const pokemon_stats_container = document.createElement("div");

  // Le titre de la div des stats du Pokémon
  const pokemon_stats_title = document.createElement("h2");
  pokemon_stats_title.innerText = "Statistics";
  pokemon_stats_container.appendChild(pokemon_stats_title);

  // Les stats du Pokémon
  pokemon_infos.stats.forEach((stat) => {
    const pokemon_stat = document.createElement("p");
    console.log(stat);
    pokemon_stat.innerText = stat.stat.name + ": " + stat.base_stat;
    pokemon_stats_container.appendChild(pokemon_stat);
  });
  pokemon_details_container.appendChild(pokemon_stats_container);
}

// La div de la morphologie du Pokémon
function createPokemonMorphologyHTML(pokemon_infos, pokemon_details_container) {
  const pokemon_morphology_container = document.createElement("div");

  // Le titre de la div de la morphologie du Pokémon
  const pokemon_morphology_title = document.createElement("h2");
  pokemon_morphology_title.innerText = "Morphology";
  pokemon_morphology_container.appendChild(pokemon_morphology_title);

  // La morphologie du Pokémon
  console.log(pokemon_infos);
  const pokemon_morphology_height = document.createElement("p");
  pokemon_morphology_height.innerHTML = "Height : " + pokemon_infos.height / 10 + "m";
  pokemon_morphology_container.appendChild(pokemon_morphology_height);

  const pokemon_morphology_weight = document.createElement("p");
  pokemon_morphology_weight.innerHTML = "Weight : " + pokemon_infos.weight / 10 + "kg";
  pokemon_morphology_container.appendChild(pokemon_morphology_weight);

  pokemon_details_container.appendChild(pokemon_morphology_container);
}

displayPokemonDetails();
