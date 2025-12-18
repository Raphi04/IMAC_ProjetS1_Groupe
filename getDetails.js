const apiurl = "https://pokeapi.co/api/v2/pokemon/";

//recup id poke
const getPokemonId = () => {
  const input = document.getElementById("pokemon-number");
  return input.value;
};

//  afficher le Pokémon
async function displayPokemon() {
  const pokemonId = getPokemonId(); // récupère la valeur de l'input

  const apiUrl = `${apiurl}${pokemonId}`; // cree url

  const response = await fetch(apiUrl);
  if (!response.ok) {
    alert("Pokémon introuvable !");
    return;
  }
  //transfo tt en obj
  const data = await response.json();
  const name = data.name;
  const image = data.sprites.front_default; // inspiré de getPokemon

  // cree el html
  const container = document.getElementById("pokemon-details");
  container.innerHTML = ""; // vide le container wtf ?

  const nameEl = document.createElement("h2"); //nom
  nameEl.textContent = name;

  const imgEl = document.createElement("img"); //img
  imgEl.src = image;
  // C EST CHAT GPT PR LES JOINS
  const typesEl = document.createElement("p"); //type
  typesEl.textContent =
    "Types: " + data.types.map((t) => t.type.name).join(", ");

  const statsEl = document.createElement("p"); //stat
  statsEl.textContent =
    "Stats: " +
    data.stats.map((s) => `${s.stat.name}: ${s.base_stat}`).join(", "); //AU SECOURS

  //taille et poids
  const sizeEl = document.createElement("p");
  sizeEl.textContent = `Height : ${data.height}, Weight: ${data.weight}`;

  //AFFICHE
  container.appendChild(nameEl);
  container.appendChild(imgEl);
  container.appendChild(typesEl);
  container.appendChild(statsEl);
  container.appendChild(sizeEl);
}
// NAN MAIS LA J AI PAS CAPTE MAIS JE DROP QD MM
// Ajouter un event listener sur le formulaire ou le bouton
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // pas rechargement de la page
  displayPokemon(); // affiche
});
