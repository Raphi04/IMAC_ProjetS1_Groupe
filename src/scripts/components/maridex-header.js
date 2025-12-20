class MariDexHeader extends HTMLElement {
  constructor() {
    super();
    this.isMenuOpen = false;
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

    const burgerBarsPath = this.getAttribute("images-path") + "burger-bars.png";

    const xMarkPath = this.getAttribute("images-path") + "x-mark.png";

    this.innerHTML = `
    <header>
      <div id="header-wrapper">
        <a href="${homePath}" id="logo-container">
            <img alt="Logo de Maridex" src="${logoPath}" />
            <h1>MariDex</h1>
        </a>

        <nav id="desktop-menu">
            <ul>
                <li><a href="${homePath}">Home</a></li>
                <li><a href="${aboutUsPath}">About Us</a></li>
                <li><a href="${pokedexPath}">Pokédex</a></li>
            </ul>
        </nav>

        <img id="burger-bars" src="${
          this.isMenuOpen ? xMarkPath : burgerBarsPath
        }" alt="${this.isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}"/>

        <div id="phone-menu">
            <nav>
                <ul>
                    <li><a href="${homePath}">Home</a></li>
                    <li><a href="${aboutUsPath}">About Us</a></li>
                    <li><a href="${pokedexPath}">Pokédex</a></li>
                </ul>
            </nav>
        </div>
      </div>
    </header>
    `;

    const burgerIcon = document.getElementById("burger-bars");

    burgerIcon.addEventListener("click", () => {
      this.isMenuOpen = !this.isMenuOpen;

      const burgerBars = document.getElementById("burger-bars");
      burgerBars.src = this.isMenuOpen ? xMarkPath : burgerBarsPath;
      burgerBars.alt = this.isMenuOpen ? "Fermer le menu" : "Ouvrir le menu";

      const phoneMenu = document.getElementById("phone-menu");
      phoneMenu.classList.toggle("open");
      document.querySelector("body").classList.toggle("overflow-hidden");
    });
  }
}

customElements.define("maridex-header", MariDexHeader);
