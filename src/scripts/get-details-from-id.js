import {
  getPokemonByIdInfosBattle,
  getPokemonByIdInfosOrganic,
} from "./get-pokemon.js";

async function displayPokemonDetails() {
  const pokemon_id = new URLSearchParams(window.location.search).get("id");
  const pokemon_infos_battle = await getPokemonByIdInfosBattle(pokemon_id);
  const pokemon_infos_organic = await getPokemonByIdInfosOrganic(pokemon_id);

  const pokemon_details_head = document.getElementById("pokemon-details-head");
  const pokemon_details_infos = document.getElementById(
    "pokemon-details-infos"
  );

  createPokemonNameHTML(pokemon_infos_battle, pokemon_details_head);
  createPokemonImageHTML(pokemon_infos_battle, pokemon_details_head);

  createPokemonDescriptionHTML(pokemon_infos_organic, pokemon_details_infos);
  createPokemonTypesHTML(pokemon_infos_battle, pokemon_details_infos);
  createPokemonStatsHTML(pokemon_infos_battle, pokemon_details_infos);
  createPokemonMorphologyHTML(pokemon_infos_battle, pokemon_details_infos);
}

// Le nom du Pokémon
function createPokemonNameHTML(
  pokemon_infos_battle,
  pokemon_details_container
) {
  const pokemon_name = document.createElement("h2");
  pokemon_name.innerText = pokemon_infos_battle.name;
  pokemon_details_container.appendChild(pokemon_name);
}

// L'image du Pokémon
function createPokemonImageHTML(
  pokemon_infos_battle,
  pokemon_details_container
) {
  const pokemon_card = document.createElement("pokemon-card");
  pokemon_card.setAttribute(
    "pokemon-url",
    pokemon_infos_battle.sprites.front_default
  );
  pokemon_card.setAttribute(
    "pokemon-type",
    pokemon_infos_battle.types[0].type.name
  );
  pokemon_details_container.appendChild(pokemon_card);
}

// la description du pokémon
function createPokemonDescriptionHTML(
  pokemon_infos_organic,
  pokemon_details_container
) {
  const pokemon_description_container = document.createElement("div");
  const pokemon_description_title = document.createElement("h3");
  pokemon_description_title.innerText = "Description";
  pokemon_description_container.appendChild(pokemon_description_title);

  const pokemon_description = document.createElement("p");

  // la description du pokémon
  const pokemon_description_text = pokemon_infos_organic.flavor_text_entries
    .find((entry) => entry.language.name === "en")
    .flavor_text.replace(/[\n\f]/g, " "); // Remplace les sauts de ligne par des espaces

  pokemon_description.textContent = pokemon_description_text;
  pokemon_description_container.appendChild(pokemon_description);

  pokemon_details_container.appendChild(pokemon_description_container);
}

// La div du type du Pokémon
function createPokemonTypesHTML(
  pokemon_infos_battle,
  pokemon_details_container
) {

  const pokemon_types_value = [];
  pokemon_infos_battle.types.forEach((type) => {
    pokemon_types_value.push(type.type.name);
  });

  const pokemon_types_container = document.createElement("div");

  // Le titre de la div du type du Pokémon
  const pokemon_types_title = document.createElement("h3");

  if (pokemon_types_value.length === 1) { pokemon_types_title.innerText = "Pokémon Type";}
  else { pokemon_types_title.innerText = "Pokémon Types";}

  pokemon_types_container.appendChild(pokemon_types_title);

  // Les types du Pokémon
  const pokemon_types = document.createElement("p");


  pokemon_types.innerText = pokemon_types_value.join(", ");
  pokemon_types_container.appendChild(pokemon_types);

  pokemon_details_container.appendChild(pokemon_types_container);
}

// La div des stats du Pokémon
function createPokemonStatsHTML(
  pokemon_infos_battle,
  pokemon_details_container
) {
  const pokemon_stats_container = document.createElement("div");

  // Le titre de la div des stats du Pokémon
  const pokemon_stats_title = document.createElement("h3");
  pokemon_stats_title.innerText = "Statistics";
  pokemon_stats_container.appendChild(pokemon_stats_title);

  const pokemon_stats_list = document.createElement("ul");
  pokemon_stats_container.appendChild(pokemon_stats_list);

  // Les stats du Pokémon
  pokemon_infos_battle.stats.forEach((stat) => {
    const pokemon_stat = document.createElement("li");
    pokemon_stat.innerText = stat.stat.name + ": " + stat.base_stat;
    pokemon_stats_list.appendChild(pokemon_stat);
  });
  pokemon_details_container.appendChild(pokemon_stats_container);
}

// La div de la morphologie du Pokémon
function createPokemonMorphologyHTML(
  pokemon_infos_battle,
  pokemon_details_container
) {
  const pokemon_morphology_container = document.createElement("div");

  // Le titre de la div de la morphologie du Pokémon
  const pokemon_morphology_title = document.createElement("h3");
  pokemon_morphology_title.innerText = "Morphology";
  pokemon_morphology_container.appendChild(pokemon_morphology_title);

  const pokemon_morphology_list = document.createElement("ul");
  pokemon_morphology_container.appendChild(pokemon_morphology_list);

  // La morphologie du Pokémon
  const pokemon_morphology_height = document.createElement("li");
  pokemon_morphology_height.innerHTML =
    "Height : " + pokemon_infos_battle.height / 10 + "m";
  pokemon_morphology_list.appendChild(pokemon_morphology_height);

  const pokemon_morphology_weight = document.createElement("li");
  pokemon_morphology_weight.innerHTML =
    "Weight : " + pokemon_infos_battle.weight / 10 + "kg";
  pokemon_morphology_list.appendChild(pokemon_morphology_weight);

  pokemon_details_container.appendChild(pokemon_morphology_container);
}

displayPokemonDetails();
