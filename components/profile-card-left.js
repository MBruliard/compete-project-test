/**
 * ShortProfileLeft
 * Short Profile card for fellow and supervisor with picture on the left
 */
class ShortProfileLeft extends HTMLElement{
  static get observedAttributes() {
    return ['name', 'role', 'short', 'cv', 'website', 'github', 'linkedin', 'picture'];
  }

  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    
    //
    const competeCss = document.createElement('link');
    competeCss.setAttribute('rel', 'stylesheet');
    competeCss.setAttribute('href', './ressources/css/compete.css');

    //
    const btncompeteCss = document.createElement('link');
    btncompeteCss.setAttribute('rel', 'stylesheet');
    btncompeteCss.setAttribute('href', './ressources/css/btn-compete.css');

    //
    const profileCss = document.createElement('link');
    profileCss.setAttribute('rel', 'stylesheet');
    profileCss.setAttribute('href', './ressources/css/profile-card.css');

    //
    const cssb = document.createElement('link');
    cssb.setAttribute('href', "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
    cssb.setAttribute('rel', "stylesheet");
    cssb.setAttribute('integrity', "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC");
    cssb.setAttribute('crossorigin', "anonymous");

    //
    const icons = document.createElement('link');
    icons.setAttribute('href', "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
    icons.setAttribute('rel', "stylesheet");

    // 
    const bundle = document.createElement('script');
    bundle.setAttribute('src', "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
    bundle.setAttribute('integrity', "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM");
    bundle.setAttribute('crossorigin', "anonymous");

    // Attach the created element to the shadow DOM
    this.shadowRoot.appendChild(competeCss);
    this.shadowRoot.appendChild(profileCss);
    this.shadowRoot.appendChild(btncompeteCss);
    this.shadowRoot.appendChild(cssb);
    this.shadowRoot.appendChild(icons);
    this.shadowRoot.appendChild(bundle);


    // Start the template part
    let main_row = document.createElement('div');
    main_row.setAttribute('class', "row profile-row");
    this.shadowRoot.appendChild(main_row);

    let picture_col = document.createElement('div');
    picture_col.setAttribute('class', "col-lg-3 col-md-4 col-sm-12");
    main_row.appendChild(picture_col);

    let main_col = document.createElement('div');
    main_col.setAttribute('class', "col-lg-9 col-md-8 col-sm-12");
    main_row.appendChild(main_col);

    // -- picture
    let picture = document.createElement('img');
    picture.setAttribute('id', "profile-picture");
    picture.setAttribute('class', "img-fluid");
    picture.setAttribute('src', "./ressources/img/profile/blank-avatar.png");
    picture_col.appendChild(picture);

    // -- 
    let name = document.createElement('h5');
    name.setAttribute('id', 'profile-name');
    main_col.appendChild(name);

    //
    let role = document.createElement('h6');
    role.setAttribute('id', 'profile-role');
    role.setAttribute('class', "card-subtitle mb-2 text-muted");
    main_col.appendChild(role);

    let bio = document.createElement('p');
    bio.setAttribute('id', 'profile-short-bio');
    bio.setAttribute('style', 'margin-top: 1em;');
    main_col.appendChild(bio);


    let buttongroup = document.createElement('div');
    buttongroup.setAttribute('id', 'profile-buttons');
    buttongroup.setAttribute('style', 'text-align:right');
    buttongroup.setAttribute('class', 'profile-buttons');
    main_col.appendChild(buttongroup);

  }

  connectedCallback() {
    console.log('profile card connected');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
       /**
        * attrName gives us the order of each attribute
        * newVal gives input for each attribute in the same order of attrName
        */
      /**
    * attrName gives us the order of each attribute
    * newVal gives input for each attribute in the same order of attrName
    */
    switch (attrName) {
      case 'name':
        this.shadowRoot.getElementById('profile-name').innerHTML = newVal;
        break;
      case 'role':
        this.shadowRoot.getElementById('profile-role').innerHTML = newVal;
        break;
      case 'short':
        this.shadowRoot.getElementById('profile-short-bio').innerHTML = newVal;
        break;
      case 'picture':
        this.shadowRoot.getElementById('profile-picture').src = newVal;
        break;
      case 'website':
        this.createProfileButton('profile-website', newVal, "bi bi-globe", "btn-compete-orange", "Website");
        break;
      case 'github':
        this.createProfileButton('profile-github', newVal, "bi bi-github", "btn-compete-orange", "Github");
        break;
      case 'linkedin':
        this.createProfileButton('profile-linkedin', newVal, "bi bi-linkedin", "btn-compete-second-blue", "LinkedIn");
        break;
      case 'cv':
        this.createProfileButton('profile-cv', newVal, "bi bi-file-earmark-person", "btn-compete-second-blue", "CV");
        break;
    }
  }

  createProfileButton (id, link, icon, color, tooltip) {
    let buttongroup = this.shadowRoot.getElementById('profile-buttons');

    let button = document.createElement('a');
    button.setAttribute('class', 'btn btn-rounded ' + color );
    button.setAttribute('id', id);
    button.setAttribute('href', link);
    button.setAttribute('data-bs-toggle', "tooltip");
    button.setAttribute('data-bs-placement', "top");
    button.setAttribute('title', tooltip);

    let ic= document.createElement('i');
    ic.setAttribute('class', icon);
    button.appendChild(ic);

    buttongroup.appendChild(button);

  }
}
window.customElements.define('short-profile-left-component', ShortProfileLeft);

;