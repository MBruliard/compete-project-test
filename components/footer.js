class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <footer class="text-center text-lg-start bg-light text-muted mt-auto">
      <div class="container">

        <div class="row">
          <div class="col-md-6 col-sm-12">
            <h4 class="footer-lead"><i class="bi bi-envelope-fill" style="color: black"></i><a class="footer-lead" href="./contact.html"> Contact Us</a></h4>
            <p>
              Francesco P. Andriulli<br/>
              Professor, Project Coordinator<br/>
              Politecnico di Torino<br/>
              Corso Duca degli Abruzzi 24, 10129, Torino, Italy<br/>
            </p>
          </div>
          
          <div class="col-md-3 col-sm12 text-center">
            <p class="footer-lead"> </p>
            <p>
              This project has received funding from the European Union Horizon 2020 Research and Innovation Programme under the Marie Sklodowska-Curie Actions, Grant Agreement No. 955476
            </p>
          </div>

          <div class="col-md-3 col-sm12 text-center">
            <img class="footer-img" src="./ressources/img/eu-flag.jpg" alt="European Union Flag">
          </div>
        </div>


        <hr>
        <div class="row text-center">
          <p class="text-center" style="font-size:0.8em; font-style:italic;">Copyright ©2021. All rights reserved.</p>
        </div>
      </div>
    </footer>
`;
  }
}

customElements.define('footer-component', Footer);