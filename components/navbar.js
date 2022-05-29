/**
 * class Navbar
 * Create a reusable Navbar Component for each page of the webpage
 * include an optional attribute to highlight the current page 'current'
 */  
class Navbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});


    const icons = document.querySelector('link[href*="bootstrap-icons"]');
    if (icons){
      this.shadowRoot.appendChild(icons.cloneNode());
    }

    //
    const competeCss = document.createElement('link');
    competeCss.setAttribute('rel', 'stylesheet');
    competeCss.setAttribute('href', './ressources/css/compete.css');

    //
    const cssb = document.createElement('link');
    cssb.setAttribute('href', "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
    cssb.setAttribute('rel', "stylesheet");
    cssb.setAttribute('integrity', "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC");
    cssb.setAttribute('crossorigin', "anonymous");

    //
    const bundle = document.createElement('script');
    bundle.setAttribute('src', "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
    bundle.setAttribute('integrity', "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM");
    bundle.setAttribute('crossorigin', "anonymous");


    // Attach the created element to the shadow DOM
    this.shadowRoot.appendChild(competeCss);
    this.shadowRoot.appendChild(cssb);
    this.shadowRoot.appendChild(bundle);

    // building nav
    let nav = document.createElement('nav');
    nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light compete-color');
    this.shadowRoot.appendChild(nav);

    // container div
    let container = document.createElement('div');
    container.setAttribute('class', 'container-fluid');
    nav.appendChild(container);

    // brand collapse
    let button = document.createElement('button');
    button.setAttribute('class', 'navbar-toggler');
    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-toggle', "collapse");
    button.setAttribute('data-bs-target', "#navbarTogglerMainMenu");
    button.setAttribute('aria-controls', "navbarTogglerMainMenu");
    button.setAttribute('aria-expanded', "false");
    button.setAttribute('aria-label', "Toggle navigation");
    button.innerHTML = `<span class="navbar-toggler-icon"></span>`;


    container.appendChild(button);

    // header
    let header = document.createElement('div');
    header.setAttribute('class', 'navbar-header');
    container.appendChild(header);

    // 
    let logo = document.createElement('a');
    logo.setAttribute('class', 'navbar-brand');
    logo.setAttribute('href', './index.html');
    header.appendChild(logo);

    //
    let img = document.createElement('img');
    img.setAttribute('class', 'nav-logo-brand');
    img.setAttribute('src', "./ressources/img/COMPETE_brand.png");
    logo.appendChild(img);   


    // body
    let navbody = document.createElement('div');
    navbody.setAttribute('class', "collapse navbar-collapse justify-content-end");
    navbody.setAttribute('id', "navbarTogglerMainMenu");
    container.appendChild(navbody);
    
    // action of the toggle button
    button.onclick = function() {
      if (navbody.classList.contains('show')) {
        navbody.classList.remove('show');
      }
      else {
        navbody.classList.add('show')  
      }
      
    };

    // list
    let list = document.createElement('ul');
    list.setAttribute('id', "content-navbar");
    list.setAttribute('class', "navbar-nav me-auto mb-2 mb-lg-0");
    navbody.appendChild(list);

    
    //
    this.addLiToNavbar('index-navbar', "./index.html", 'bi bi-house-fill', ' Home');
    this.addLiToNavbar('project-navbar', "./project.html", "bi bi-kanban",' Our Project');
    this.addLiToNavbar('team-navbar', "./team.html", "bi bi-person-circle", ' Our team');
    this.addLiToNavbar('publications-navbar', "./publications.html", "bi bi-journal-bookmark-fill", ' Publications');
    this.addLiToNavbar('contact-navbar', "./contact.html", "bi bi-envelope-fill", ' Contact');
  }

  /**
   * Define custom attributes for the web component
   */
  static get observedAttributes() {
    return ['current'];
  }

  /**
   * First call of web component
   */
  connectedCallback() {
    console.log('navbar connected');
  }

  /**
   * Call of component with a change in attribute
   */
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.shadowRoot.getElementById(newVal).ariaCurrent = "page";
    this.shadowRoot.getElementById(newVal).classList.add('active');
  }

  /**
   * Function for automatic creation of a new element in the navbar
   * 
   */ 
  addLiToNavbar (id_elem, href_elem, icon_elem, text_elem) {
    
    var list = this.shadowRoot.getElementById('content-navbar');

    let elem = document.createElement('li');
    elem.setAttribute('class', 'nav-item');
    list.appendChild(elem);

    let link_elem = document.createElement('a');
    link_elem.setAttribute('id', id_elem);
    link_elem.setAttribute('class', 'nav-link');
    link_elem.setAttribute('href', href_elem);
    elem.appendChild(link_elem);

    let i_elem = document.createElement('i');
    i_elem.setAttribute('class', icon_elem);
    link_elem.appendChild(i_elem);
    link_elem.appendChild(document.createTextNode(text_elem));
  }
}
customElements.define('navbar-component', Navbar);
