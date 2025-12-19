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
    const home_path = this.getAttribute("pages-path") + "index.html";
    const about_us_path = this.getAttribute("pages-path") + "pages/about_us.html";
    const pokedex_path = this.getAttribute("pages-path") + "pages/pokedex.html";

    // Création de l'atribut images-path car les images ne sont pas accessibles de la même manière sur toutes les pages
    const logo_path = this.getAttribute("images-path") + "logo.png";
    const burger_bars_path = this.getAttribute("images-path") + "burger-bars.png";
    const x_mark_path = this.getAttribute("images-path") + "x-mark.png";

    this.innerHTML = `
    <header>
      <div id="header-wrapper">
        <a href="${home_path}" id="logo-container">
            <img alt="Logo de Maridex" src="${logo_path}" />
            <h1>MariDex</h1>
        </a>
        <nav id="desktop-menu">
            <ul>
                <li><a href="${home_path}">Home</a></li>
                <li><a href="${about_us_path}">About Us</a></li>
                <li><a href="${pokedex_path}">Pokédex</a></li>
            </ul>
        </nav>

        <img id="burger-bars" src="${this.isMenuOpen ? x_mark_path : burger_bars_path}" alt=""/>
        <div id="phone-menu">
            <nav>
                <ul>
                    <li><a href="${home_path}">Home</a></li>
                    <li><a href="${about_us_path}">About Us</a></li>
                    <li><a href="${pokedex_path}">Pokédex</a></li>
                </ul>
            </nav>
        </div>
      </div>
    </header>
    `;

    const burger_icon = document.getElementById("burger-bars");
    burger_icon.addEventListener("click", () => {
      this.isMenuOpen = !this.isMenuOpen;

      const burger_bars = document.getElementById("burger-bars");
      burger_bars.src = this.isMenuOpen ? x_mark_path : burger_bars_path;

      const phone_menu = document.getElementById("phone-menu");
      phone_menu.classList.toggle("open");
      document.querySelector("body").classList.toggle("overflow-hidden");
    });
  }
}

customElements.define("maridex-header", MariDexHeader);
