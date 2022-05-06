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
				border-radius: 15px; 
				box-shadow: 3px 5px 5px 3px #035397;
			}

			#image-news {
				border-radius: 15px 15px 0px 0px; 
				object-fit: scale-down; 
				width:100%; 
				height: auto; 
				max-height:350px;
			}

			.card-body {
				align-text: left; 
				padding-top: 0.5em; 
				padding-bottom:0.5em; 
				padding-left:0.5em; 
				padding-right:0.5em;
			}

			h5 {
				color: #035397; 
				font-weight:bold; 
				font-size: 1.2em; 
				padding-left: 0.8em; 
				margin-top: 1em; 
				margin-bottom: 0.8em;"
			}


			p {
				padding-left: 0.5em;
				padding-right: 0.5em;
			}

			.card-footer {
				text-align: right; 
				margin-bottom: 10px; 
				margin-right: 15px;
			}

			#date-news {
				font-style: italic; 
				color:#035397;
			}

			
		`;

		template.innerHTML =`
			<div id='card-news'>
            	<img id='image-news' src="./ressources/img/COMPETElogo-noBG.png" class="" alt="COMPETE logo">
            	
            	<div class="card-body">
              		<h5 id='title-news'>here is the title</h5>
              		<p id='text-news'>And then we will add some text</p>
            	</div>
            	<div class="card-footer">
              		<small id='date-news'></small>
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