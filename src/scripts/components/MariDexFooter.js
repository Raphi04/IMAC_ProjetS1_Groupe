class MariDexFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    //Création de l'attribut pages_path car les url des pages ne sont pas les mêmes partout
    const home_path = this.getAttribute("pages-path") + "index.html";
    const about_us_path = this.getAttribute("pages-path") + "pages/about_us.html";
    const pokedex_path = this.getAttribute("pages-path") + "pages/pokedex.html?page=0";

    // Création de l'atribut images-path car les images ne sont pas accessibles de la même manière sur toutes les pages
    const logo_path = this.getAttribute("images-path") + "logo.png";

    this.innerHTML = `
      <footer>
      <div id="footer-wrapper">
        <div>
          <section>
            <h3>Plan du site</h3>
            <nav>
              <ul>
                <li><a href="${home_path}">Accueil</a></li>
                <li><a href="${about_us_path}">A&nbsp;propos</a></li>
                <li><a href="${pokedex_path}">Pokédex</a></li>
              </ul>
            </nav>
          </section>

          <p>
            Ce site a été créé à l'occasion d'un projet de premier semestre de <b>la
            formation IMAC</b>.
          </p>

          <div id="image-wrapper">
            <img src="${logo_path}" alt="Logo" />
          </div>
        </div>

        <p>© Tous droits réservés - MariDex 2025</p>
      </div>
    </footer>
    `;
  }
}

customElements.define("maridex-footer", MariDexFooter);
