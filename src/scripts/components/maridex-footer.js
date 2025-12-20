class MariDexFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    //Création de l'attribut pages_path car les url des pages ne sont pas les mêmes partout
    const homePath = this.getAttribute("pages-path") + "index.html";

    const aboutUsPath = this.getAttribute("pages-path") + "pages/about-us.html";

    const pokedexPath =
      this.getAttribute("pages-path") + "pages/pokedex.html?page=0";

    // Création de l'atribut images-path car les images ne sont pas accessibles de la même manière sur toutes les pages
    const logoPath = this.getAttribute("images-path") + "logo.png";

    this.innerHTML = `
      <footer>
        <div id="footer-wrapper">
          <div>
            <section>
              <h3>Plan du site</h3>
              <nav>
                <ul>
                  <li><a href="${homePath}">Accueil</a></li>
                  <li><a href="${aboutUsPath}">A&nbsp;propos</a></li>
                  <li><a href="${pokedexPath}">Pokédex</a></li>
                </ul>
              </nav>
            </section>

            <p>
              Ce site a été créé à l'occasion d'un projet de premier semestre de <a href="https://www.esiee.fr/formations/ingenieur/filieres/imac" target="_blank" title="Nouvel Onglet - Site de l'IMAC">la formation IMAC</a>.
            </p>
            
            <div id="image-wrapper">
              <img src="${logoPath}" alt="Logo" />
            </div>
          </div>

          <p>© Tous droits réservés - MariDex 2025</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("maridex-footer", MariDexFooter);
