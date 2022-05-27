class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background: rgb(254,200,6);
      background: linear-gradient(90deg, rgba(254,200,6,1) 0%, rgba(241,152,87,1) 69%, rgba(221,51,43,1) 100%); ">
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
              <li class="nav-item"><a id='index-navbar' class="nav-link" href="./index.html"><i class="bi bi-house-fill"></i> Home</a></li>
              <li class="nav-item"><a id='project-navbar' class="nav-link" href="./project.html"><i class="bi bi-kanban"></i> Our Project</a></li>
              <li class="nav-item"><a id='team-navbar' class="nav-link" href="./team.html"><i class="bi bi-person-circle"></i> Our team</a></li>
              <li class="nav-item"><a id='publications-navbar' class="nav-link" href="./publications.html"><i class="bi bi-journal-bookmark-fill"></i> Publications</a></li>
              <li class="nav-item"><a id='contact-navbar' class="nav-link" href="./contact.html"><i class="bi bi-envelope-fill"></i> Contact</a></li>
            </ul>
        </div>
      </div>
    </nav>
    `;
  }

  connectedCallback() {
    console.log('old navbar ok');
  }
}
customElements.define('navbar-component', Navbar);


