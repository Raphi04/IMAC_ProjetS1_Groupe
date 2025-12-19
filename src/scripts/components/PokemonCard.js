class PokemonCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    //Création de l'attribut title car on ne veut pas tout le temps mettre le nom du pokémon
    const pokemon_name = this.getAttribute("pokemon-name");
    const pokemon_url = this.getAttribute("pokemon-url");
    const pokemon_type = this.getAttribute("pokemon-type");

    this.innerHTML = `
      <div class="pokemon-card">
        ${pokemon_name ? `<p>${pokemon_name}</p>` : ""}

        <div class="circle ${this.check_pokemon_type(pokemon_type)}">
          <img src="${pokemon_url}" alt="" />
        </div>
      </div>
    `;
  }

  check_pokemon_type(pokemon_type) {
    switch (pokemon_type) {
      case "bug":
        return "bug";

      case "dark":
        return "dark";

      case "dragon":
        return "dragon";

      case "electric":
        return "electric";

      case "fairy":
        return "fairy";

      case "fighting":
        return "fighting";

      case "fire":
        return "fire";

      case "flying":
        return "flying";

      case "ghost":
        return "ghost";

      case "grass":
        return "grass";

      case "ground":
        return "ground";

      case "ice":
        return "ice";

      case "normal":
        return "normal";

      case "poison":
        return "poison";

      case "psychic":
        return "psychic";

      case "rock":
        return "rock";

      case "steel":
        return "steel";

      case "water":
        return "water";
    }
  }
}

customElements.define("pokemon-card", PokemonCard);
