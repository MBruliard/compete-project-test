/**
 * class Navbar
 * Create a reusable Navbar Component for each page of the webpage
 * include an optional attribute to highlight the current page 'current'
 */  
class Navbar extends HTMLElement {
  constructor() {
    super();

    let template = document.createElement('template');
    let style = document.createElement('style');

    style.innerHTML = `
      .nav-logo-brand {
        max-height: 60px;
        max-width: auto;
        object-fit: scale-down;
      }

      nav .nav-link {
        padding-right: 0.3em;
        padding-left: 0.3em; 
        font-size: 1.1em;
      }

      nav .nav-link:hover {
        font-weight: bold;
        font-size: 1.1em;
      }

      nav .active {
        font-weight: bold;
        font-size: 1.1em;
      }
    `;
    
    template.innerHTML = `
     <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background: rgb(254,200,6);
      background: linear-gradient(90deg, rgba(254,200,6,1) 0%, rgba(241,152,87,1) 69%, rgba(221,51,43,1) 100%); ">
      <div class="container-fluid">
        <button id='button-navbar-toggler' class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerMainMenu" aria-controls="navbarTogglerMainMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-header">
          <a class="navbar-brand" href="./index.html">
            <img class="nav-logo-brand" src="./ressources/img/COMPETE_brand.png" alt="COMPETE logo">
          </a>    
        </div>

        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerMainMenu">
            <ul id="content-navbar" class="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
        </div>
      </div>
    </nav>
    `;

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(style);
    // charge bundle Bootstrap
    const bundle = document.querySelector('script[src*="popper"]');
    if (bundle) {
      this.shadowRoot.appendChild(bundle.cloneNode());
    }

    const bootstrap_css = document.querySelector('link[href*="bootstrap.min.css"]');  
    if (bootstrap_css) {
      this.shadowRoot.appendChild(bootstrap_css.cloneNode());
    }

    const bootstrap_js = document.querySelector('script[src*="bootstrap.min.js"]');
    if (bootstrap_js) {
      this.shadowRoot.appendChild(bootstrap_js.cloneNode());
    }
    const icons = document.querySelector('link[href*="bootstrap-icons"]');
    if (icons){
      this.shadowRoot.appendChild(icons.cloneNode());
    }

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    //
    this.shadowRoot.getElementById('content-navbar').innerHTML+=`
      <li class="nav-item"><a id='index-navbar' class="nav-link" href="./index.html"><i class="bi bi-house-fill"></i> Home</a></li>
      <li class="nav-item"><a id='project-navbar' class="nav-link" href="./project.html"><i class="bi bi-kanban"></i> Our Project</a></li>
      <li class="nav-item"><a id='team-navbar' class="nav-link" href="./team.html"><i class="bi bi-person-circle"></i> Our team</a></li>
      <li class="nav-item"><a id='publications-navbar' class="nav-link" href="./publications.html"><i class="bi bi-journal-bookmark-fill"></i> Publications</a></li>
      <li class="nav-item"><a id='contact-navbar' class="nav-link" href="./contact.html"><i class="bi bi-envelope-fill"></i> Contact</a></li>
    `;
  }

  static get observedAttributes() {
    return ['current'];
  }

  connectedCallback() {
    
    console.log('navbar connected');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.shadowRoot.getElementById(newVal).ariaCurrent = "page";
    this.shadowRoot.getElementById(newVal).classList.add('active');
  }
}

customElements.define('navbar-component', Navbar);