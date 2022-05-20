const common_style = `
      .profile-row {
        margin-top: 1em;
        margin-bottom: 5em;
      }

      .profile-buttons {
        margin-top: 1em;
        margin-bottom: 0.8em;
        font-size:1.3em;
      }

      #profile-picture {
        border-radius:10px;
      }

      #profile-name {
        color: #035397;
        font-weight: bold;
      }

      #profile-short-bio {
        text-align: justify; 
      }
`;


/**
 * ShortProfileLeft
 * Short Profile card for fellow and supervisor with picture on the left
 */
class ShortProfileLeft extends HTMLElement{
  static get observedAttributes() {
    return ['name', 'short', 'cv', 'website', 'githublink', 'linkedin', 'picture'];
  }

  constructor() {
    super();
    
    // template attribute to add elements
    let template = document.createElement('template');
    let style = document.createElement('style');

    // style to add
    style.innerHTML = common_style;

    // template to add
    template.innerHTML =`
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
      <link rel="stylesheet" href="./ressources/css/btn-compete.css">
      
      <div class="row profile-row">
        <div class="col-lg-2 col-md-4 col-sm-12">
          <img id="profile-picture"  class="img-fluid" src="./ressources/img/profile/blank-avatar.png">
        </div>
        <div class="col-lg-10 col-md-8 col-sm-12">
          <h5 id="profile-name"></h5>
          <p id="profile-short-bio"></p>

          <div style="text-align:right;" class="profile-buttons">
            <a href="#" id="profile-website" class="btn btn-rounded btn-compete-orange" data-bs-toggle="tooltip" data-bs-placement="top" title="Website"><i class="bi bi-globe"></i></a>
            <a href="#" id="profile-cv" class="btn btn-rounded btn-compete-second-blue"  data-bs-toggle="tooltip" data-bs-placement="top" title="Curriculum"><i class="bi bi-file-earmark-person"></i></a>
            <a href="#" id="profile-github" class="btn btn-rounded btn-compete-orange"  data-bs-toggle="tooltip" data-bs-placement="top" title="Github"><i class="bi bi-github"></i></a>
            <a href="#" id="profile-linkedin" class="btn btn-rounded btn-compete-second-blue"  data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    `;

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
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
      case 'short':
        this.shadowRoot.getElementById('profile-short-bio').innerHTML = newVal;
        break;
      case 'picture':
        this.shadowRoot.getElementById('profile-picture').src = newVal;
        break;
      case 'website':
        this.shadowRoot.getElementById('profile-website').href = newVal;
        break;
      case 'github':
        this.shadowRoot.getElementById('profile-github').href = newVal;
        break;
      case 'linkedin':
        this.shadowRoot.getElementById('profile-linkedin').href = newVal;
        break;
      case 'cv':
        this.shadowRoot.getElementById('profile-cv').href = newVal;
        break;
    }
  }
}
window.customElements.define('short-profile-left-component', ShortProfileLeft);

/**
 * ShortProfileRight
 * Short Profile card for fellow and supervisor with picture on the right
 */
class ShortProfileRight extends HTMLElement{
  static get observedAttributes() {
    return ['name', 'short', 'cv', 'website', 'githublink', 'linkedin', 'picture'];
  }

  constructor() {
    super();
    
    // template attribute to add elements
    let template = document.createElement('template');
    let style = document.createElement('style');

    // style to add
    style.innerHTML = common_style;

    // template to add
    template.innerHTML =`
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
      <link rel="stylesheet" href="./ressources/css/btn-compete.css">
      
      <div class="row profile-row">
        
        <div class="col-lg-10 col-md-8 col-sm-12">
          <h5 id="profile-name"></h5>
          <p id="profile-short-bio"></p>

          <div style="text-align:left;" class="profile-buttons">
            <a href="#" id="profile-website" class="btn btn-rounded btn-compete-orange" data-bs-toggle="tooltip" data-bs-placement="top" title="Website"><i class="bi bi-globe"></i></a>
            <a href="#" id="profile-cv" class="btn btn-rounded btn-compete-second-blue"  data-bs-toggle="tooltip" data-bs-placement="top" title="Curriculum"><i class="bi bi-file-earmark-person"></i></a>
            <a href="#" id="profile-github" class="btn btn-rounded btn-compete-orange"  data-bs-toggle="tooltip" data-bs-placement="top" title="Github"><i class="bi bi-github"></i></a>
            <a href="#" id="profile-linkedin" class="btn btn-rounded btn-compete-second-blue"  data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-12">
          <img id="profile-picture"  class="img-fluid" src="./ressources/img/profile/blank-avatar.png">
        </div>
      </div>
    `;

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
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
      case 'short':
        this.shadowRoot.getElementById('profile-short-bio').innerHTML = newVal;
        break;
      case 'picture':
        this.shadowRoot.getElementById('profile-picture').src = newVal;
        break;
      case 'website':
        this.shadowRoot.getElementById('profile-website').href = newVal;
        break;
      case 'github':
        this.shadowRoot.getElementById('profile-github').href = newVal;
        break;
      case 'linkedin':
        this.shadowRoot.getElementById('profile-linkedin').href = newVal;
        break;
      case 'cv':
        this.shadowRoot.getElementById('profile-cv').href = newVal;
        break;
    }
  }
}
window.customElements.define('short-profile-right-component', ShortProfileRight);