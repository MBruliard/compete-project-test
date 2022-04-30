class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerMainMenu" aria-controls="navbarTogglerMainMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-header">
          <a class="navbar-brand" href="./index.html">
            <img class="nav-logo-brand" src="./ressources/img/COMPETE_brand.png" alt="COMPETE logo">
          </a>    
        </div>

        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerMainMenu">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link" href="./project.html"><i class="bi bi-kanban"></i> Our Project</a></li>
              <li class="nav-item"><a class="nav-link" href="./team.html"><i class="bi bi-people-fill"></i> Our team</a></li>
              <li class="nav-item"><a class="nav-link" href="./publications.html"><i class="bi bi-journal-bookmark-fill"></i> Publications</a></li>
              <li class="nav-item"><a class="nav-link" href="./contact.html"><i class="bi bi-envelope-fill"></i> Contact</a></li>
            </ul>
        </div>
      </div>
    </nav>
    `;
  }
}

customElements.define('navbar-component', Navbar);