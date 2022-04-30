const template_left  = document.createElement('template');
const template_right = document.createElement('template');

template_left.innerHTML = `
      <div class="row g-0">
        <div class="col-md-4 col-sm-12">
          <img src="..." style='width=200px; height=auto;' class="img-fluid rounded-start img-profile" alt="...">
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="card-body">
            <h4 class="card-title"><slot name='title' /></h4>
            <p class="card-text"><slot name='text' /></p>
          </div>
        </div>
      </div>
`;

template_right.innerHTML = `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-8 col-sm-12">
          <div class="card-body">
            <h4 class="card-title"><slot name='title' /></h4>
            <p class="card-text"><slot name='text' /></p>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <img src="..." class="img-fluid rounded-start img-profile" alt="...">
        </div>
      </div>
    </div>
`;

class ShortProfileLeft extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template_left.content.cloneNode(true));
    this.shadowRoot.querySelector('h4').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('text');
    this.shadowRoot.querySelector('img').src = this.getAttribute('profile-picture');   
  } 

  connectedCallback(){
    this.h4 = this.getAttribute("title")
    this.p = this.getAttribute("text")
    this.render();
  }

  render(){
    this.h4;
  }
}
window.customElements.define('short-profile-left-component', ShortProfileLeft);


class ShortProfileRight extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template_right.content.cloneNode(true));
    this.shadowRoot.querySelector('h4').innerText = this.getAttribute('title'); 
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('text');
    this.shadowRoot.querySelector('img').src = this.getAttribute('profile-picture');   
  } 

  connectedCallback(){
    this.h4 = this.getAttribute("title")
    this.p = this.getAttribute("text")
    this.render();
  }

  render(){
    this.h4;
  }
}
window.customElements.define('short-profile-right-component', ShortProfileRight);