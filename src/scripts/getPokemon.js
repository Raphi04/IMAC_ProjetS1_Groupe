const apiurl = "https://pokeapi.co/api/v2/";

function random_number(count, max, min) {
  let list_number = [];
  while (list_number.length < count) {
    const random_nb = Math.floor(Math.random() * (max - min + 1)) + min;
    list_number.push(random_nb);
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

function createPokemonHTML(pokemon_infos) {
  console.log(pokemon_infos);

  let pokemon_container = document.createElement("a");
  pokemon_container.src = pokemon_infos;
  pokemon_container.classList.add("rectangle");

  let pokemon_name = document.createElement("p");
  pokemon_name.innerHTML = pokemon_infos.name;
  pokemon_container.appendChild(pokemon_name);

  let pokemon_type_circle = document.createElement("div");
  pokemon_type_circle.classList.add("cercle");
  pokemon_container.appendChild(pokemon_type_circle);

  let pokemon_image = document.createElement("img");
  pokemon_image.src = pokemon_infos.sprites.front_default;
  pokemon_type_circle.appendChild(pokemon_image);

  const grillePokemon = document
    .getElementsByClassName("grille")[0]
    .appendChild(pokemon_container);
}

async function getRandomPokemons() {
  const random_pokemon = random_number(6, 1025, 1);
  const pokemons_infos = await getPokemonsById(random_pokemon);

  console.log(random_pokemon);
  console.log(pokemons_infos);

  for (const pokemon_infos of pokemons_infos) {
    createPokemonHTML(pokemon_infos);
  }
}

getRandomPokemons();
