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


class PublicationCard extends HTMLElement {
  
  static get observedAttributes() {
    return ['title', 'author', 'date', 'purpose', 'publisher', 'publisherlink', 'downloadlink'];
  }

  constructor() {
    super();
    
    const main = document.getElementsByTagName('main')[0];

    let parent = document.createElement("div");
    parent.setAttribute('class', 'card');
    main.appendChild(parent);

    let title = document.createElement("h5");
    title.setAttribute('class', 'card-header title-publication-card');
    parent.appendChild(title);

    let card_body = document.createElement("div");
    card_body.setAttribute('class', 'card-body');
    parent.appendChild(card_body);

    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.innerHTML = publication_card_text;
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
       /**
        * attrName gives us the order of each attribute
        * newVal gives input for each attribute in the same order of attrName
        */
      switch (attrName) {
        case 'title':
          this.getElementById('title-publication-card').appendChild(
            document.createTextNode(newVal)
            );
          break;
        case 'author':
        document.getElementById('author-publication-card').innerText = newVal;
        break;
      case 'date':
        document.getElementById('date-publication-card').innerText = newVal;
        break;
      case 'purpose':
        document.getElementById('purpose-publication-card').innerText = newVal;
        break;
      case 'publisher':
        document.getElementById('publisher-publication-card').innerText = newVal;
        break;
      case 'publisherlink':
        console.log(newVal);
        break;
      case 'downloadlink':
        console.log(newVal);
        break;
      }
  }
}
customElements.define('publication-card-component', PublicationCard);