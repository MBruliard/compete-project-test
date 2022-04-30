class LoremIpsum extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor vulputate lorem in aliquet. Proin sit amet efficitur leo. Fusce libero risus, sagittis non ante et, porta viverra ipsum. Donec hendrerit nulla imperdiet neque tempus elementum. Etiam ultrices ligula nec iaculis volutpat. In eu convallis arcu, sit amet malesuada nisl. Mauris in leo ut massa rhoncus bibendum. Etiam placerat aliquam ipsum ut dignissim. Duis condimentum vitae felis quis euismod. Duis ac lacinia odio. Ut augue urna, molestie in nulla luctus, euismod feugiat nisl. Donec rutrum ligula non sollicitudin auctor. In mollis ligula ac aliquam elementum.</p>
<p>Aliquam vel ligula sit amet sem eleifend pretium. Vivamus dolor nulla, sodales varius eleifend sit amet, cursus eget erat. In ligula urna, mattis in commodo non, sagittis vel justo. Vivamus aliquam euismod vulputate. Donec ultricies tempor sollicitudin. Fusce scelerisque neque tortor, vitae egestas nisi fringilla at. Curabitur in dolor luctus, cursus quam quis, commodo lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque nec tortor odio. Phasellus neque quam, mattis id magna ut, dictum sagittis turpis. Donec mi orci, eleifend accumsan hendrerit vel, scelerisque at lectus. Aliquam lacus ligula, malesuada et orci quis, gravida pellentesque sapien. Donec at venenatis leo. Ut consequat dui non elit lobortis, in feugiat enim convallis.</p>
<p>Pellentesque pellentesque mauris varius porttitor molestie. Nam faucibus leo felis, quis vulputate ipsum bibendum ac. Donec sollicitudin posuere velit et ultricies. Sed efficitur leo ac purus fringilla ultricies. Praesent consectetur venenatis lobortis. Pellentesque vestibulum sapien semper, tincidunt massa tincidunt, semper turpis. Maecenas mollis turpis id nisi congue malesuada ac ut libero. Vestibulum vitae metus sem. Phasellus iaculis est pharetra eleifend fermentum. Vivamus suscipit ultricies erat ut malesuada. Aliquam est purus, faucibus sed rhoncus vehicula, pharetra vitae velit. Vivamus pretium tortor a neque ultrices dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
<p>Etiam non nunc ac nisi sollicitudin egestas. Quisque tristique ultricies tincidunt. Sed mollis ac augue a tristique. Suspendisse vitae velit vehicula elit rhoncus tempus. Aliquam justo tortor, consectetur pulvinar lectus quis, dictum cursus sem. In sed tortor convallis, tristique ipsum eu, placerat urna. Etiam rhoncus ligula eros, ac fringilla dui laoreet sed.</p>
<p>Fusce gravida mi eu lacus euismod, ac porta nibh condimentum. Sed vulputate erat sit amet lectus porta ultricies. Integer eleifend felis consectetur nisi tempor eleifend. Praesent non hendrerit velit. Nullam porta felis sit amet dolor congue, non eleifend ante ornare. Cras a augue pulvinar elit egestas finibus vitae sit amet mi. Vestibulum fringilla suscipit augue, et viverra augue blandit sit amet. Nunc aliquet dictum purus, malesuada pulvinar risus pretium ac. Donec bibendum posuere risus id efficitur. Quisque pharetra est non risus scelerisque interdum. </p>          
`;
  }
}

customElements.define('lorem-component', LoremIpsum);
