const apiurl = "https://pokeapi.co/api/v2/pokemon/";

// Afficher le Pokémon
export async function displayPokemon(pokemon_id) {
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
// à simplifier
