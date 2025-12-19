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

        <div class="circle">
          <img src="${pokemon_url}" alt="" />
        </div>
      </div>
    `;
  }
}

customElements.define("pokemon-card", PokemonCard);
