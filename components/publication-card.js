const publication_card_text = `
<div class="card">
  <h5 class="card-header" id="title-publication-card">Title</h5>
  <div class="card-body">
    <p class="card-text" id="author-publication-card">Author</p>
    <p class="card-text" id="date-publication-card">Date</p>
    <p class="card-text" id="purpose-publication-card">Purpose of publication</p>
    
    <div class="buttons-publication-card">
      <a href="#" id="publisher-publication-card" class="btn btn-floating btn-compete-second-blue">Editor</a>
      <button id="licence-publication-card" type="button" class="btn btn-floating btn-compete-orange"><i class="bi bi-download"></i> Licence</button>
      <a href='#' id="download-publication-card" class="btn btn-floating btn-compete-blue"><i class="bi bi-download"></i> Download</a>
    </div>
  </div>
</div>
`;

/**
 * PublicationCard for COMPETE website
 */
class PublicationCard extends HTMLElement {
  
  static get observedAttributes() {
    return ['title', 'author', 'date', 'purpose', 'publisher', 'publisherlink', 'downloadlink'];
  }

  constructor() {
    super();
    
    // template attribute to add elements
    let template = document.createElement('template');
    let style = document.createElement('style');

    // style to add
    style.innerHTML =`

    `;


    // template to add
    template.innerHTML =`
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
      <link rel="stylesheet" href="./ressources/css/btn-compete.css">
      <link rel="stylesheet" href="./ressources/css/publications.css">
      
      <div class="card publication-card">
        <h5 class="card-header" id="title-publication-card">Unknown Title</h5>
        <div class="card-body">
          <p class="card-text" id="author-publication-card">???</p>
          <p class="card-text" id="date-publication-card"></p>
          <p class="card-text" id="purpose-publication-card"></p>
          
          <div class="buttons-publication-card">
            <a href="#" id="publisher-publication-card" class="btn btn-compete-second-blue"><i class="bi bi-journals"></i> Publisher</a>
            <a href='#' id="download-publication-card" class="btn btn-compete-orange"><i class="bi bi-download"></i> Download</a>
          </div>
        </div>
      </div>
    `;

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log('publication card connected');
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
      case 'title':
        let title = this.shadowRoot.getElementById('title-publication-card');
        title.innerHTML = newVal;
        break;
      case 'author':
        let author = this.shadowRoot.getElementById('author-publication-card');
        author.innerHTML = newVal;
        break;
      case 'date':
        let date = this.shadowRoot.getElementById('date-publication-card');
        date.innerHTML = newVal;
        break;
      case 'purpose':
        this.shadowRoot.getElementById('purpose-publication-card').innerHTML = newVal;
        break;
      case 'publisher':
        this.shadowRoot.getElementById('publisher-publication-card').innerHTML = "<i class='bi bi-journals'></i> " + newVal;
        break;
      case 'publisherlink':
        this.shadowRoot.getElementById('publisher-publication-card').href = newVal;
        break;
      case 'downloadlink':
        this.shadowRoot.getElementById('download-publication-card').href = newVal;
        break;
    }
  }
}
customElements.define('publication-card-component', PublicationCard);