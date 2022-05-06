/**
 * NewsCard class. 
 * Web Component reusable to present flash news
 */
class NewsCard extends HTMLElement {

	static get observedAttributes() {
		return ['title', 'text', 'image', 'date'];
	}

  	constructor() {
		super();
		

		// template attribute to add elements
		let template = document.createElement('template');
		let style = document.createElement('style');

		style.innerHTML = `

			#card-news {
				margin-top: 1em;
				margin-bottom: 0.6em;
				border: 1.4px solid #035397;
				border-radius: 15px;
			}

			h5 {
				padding-left: 0.5em;
				padding-right: 0.5em;
				font-size: 1.2em;
				font-weight: bold;
				color: #035397;
			}


			p {
				padding-left: 0.5em;
				padding-right: 0.5em;
			}

			.card-footer {
				border-top: 1.4px solid #035397;
				border-radius: 0px 0px 15px 15px;
				padding-left: 1em;
				padding-right: 1em;
				text-align: right;
				font-style: italic;
				background: rgba(3, 83, 151, 0.5);
				color: #0D3191;
			}

			#image-news {
				width: 100%;
				height: auto;
				max-height: 300px;
				border-radius: 15px 15px 0px 0px;
				object-fit: scale-down;
			}
		`;

		template.innerHTML =`
			<div id='card-news' class="card">
				<img id='image-news' src="..." class="card-img-top" alt="...">
				<div class="card-body">
					<h5 id='title-news' class="card-title"></h5>
					<p id='text-news' class="card-text"></p>
				</div>
				<div class="card-footer">
    				<small id='date-news' class="text-muted"></small>
  				</div>
			</div>
		`;
	
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(style);
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	connectedCallback() {
		console.log('news card connected');
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		/**
		* attrName gives us the order of each attribute
		* newVal gives input for each attribute in the same order of attrName
		*/
		switch (attrName) {
			case 'title':
				let title = this.shadowRoot.getElementById('title-news');
				title.innerHTML = newVal;
				break;
			case 'text':
				let text = this.shadowRoot.getElementById('text-news');
				text.innerHTML = newVal;
				break;
			case 'date':
				let date = this.shadowRoot.getElementById('date-news');
				date.innerHTML = newVal;
				break;
			case 'image':
				this.shadowRoot.getElementById('image-news').src = newVal;
				break;
		}
	}
}
customElements.define('news-card-component', NewsCard);