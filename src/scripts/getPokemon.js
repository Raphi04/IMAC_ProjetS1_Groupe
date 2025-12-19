const apiurl = "https://pokeapi.co/api/v2/";

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

async function getPokemonById(id) {
  const response = await fetch(apiurl + "pokemon/" + id);
  const data = await response.json(); //tranfo rep en data
  return data;
}

async function getPokemonsById(list_number) {
  const all_pokemon = []; //pr stcoker les poke recupéréES
  for (const pokemon_id of list_number) {
    const pokemon = await getPokemonById(pokemon_id); //on recup id liées au num aléatoire
    all_pokemon.push(pokemon); //ajoute dans le tableau pokemons
  }

  return all_pokemon;
}

function createPokemonCardsHTML(pokemon_infos, with_name) {
  console.log(pokemon_infos);
  const pokemon_card = document.createElement("pokemon-card");
  if (with_name) {
    pokemon_card.setAttribute("pokemon-name", pokemon_infos.name);
  }

  pokemon_card.setAttribute("pokemon-url", pokemon_infos.sprites.front_default);
  pokemon_card.setAttribute("pokemon-type", pokemon_infos.types[0].type.name);

  return pokemon_card;
}

//Accueil
async function getRandomPokemons() {
  const random_pokemon = random_number(6, 1025, 1);
  const pokemons_infos = await getPokemonsById(random_pokemon);

  for (const pokemon_infos of pokemons_infos) {
    const pokemon_container = document.createElement("a");
    pokemon_container.href = "../../pages/pokemon_details.html?id=" + pokemon_infos.id;
    pokemon_container.classList.add("pokemon-card-container");
    pokemon_container.appendChild(createPokemonCardsHTML(pokemon_infos));

    document.getElementsByClassName("grille")[0].appendChild(pokemon_container);
  }
}

getRandomPokemons();
