// Obtener el elemento header 
const navbar = document.getElementById('navbar');
// Detectar URL base 
const baseUrl = window.location.pathname.split('/pages/')[0];

// Definir el template como string
const navTemplate = `
  <a href="https://manuelheraz.github.io/MarinaGaming/" class="logo"> 
    <i class='bx bxs-movie'></i> MAR TV
  </a>

  <div class="bx bx-menu" id="menu-icon"></div>

  <ul class="navbar">
    <li>
      <a href="${baseUrl}/index.html#home" class="home-active">Inicio</a>
    </li>
    <li>
      <a href="${baseUrl}/index.html#series">Series</a>
    </li>
    <li>
      <a href="${baseUrl}/index.html#movies">Peliculas</a>
    </li>
    <li>
      <a href="${baseUrl}/index.html#coming">Proximamente</a>
    </li>
    <li>
      <a href="${baseUrl}/index.html#newsletter">Contacto</a>
    </li>
  </ul>

  <a href="https://discord.gg/XfqqrWNAhy" class="btn">
    Discord
  </a>
`;

// Renderizar el template 
navbar.innerHTML = navTemplate;