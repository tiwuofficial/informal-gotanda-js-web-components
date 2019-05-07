class GotandajsLogo extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'}).innerHTML = `
      <style>
        :host {
          width: 300px;
        }
        img {
          width: 100%;
        }
      </style>
      
      <a href="https://gotanda.js.org/">
        <img src="https://connpass-tokyo.s3.amazonaws.com/thumbs/ed/cd/edcd0537f35726f9ff4f700f53aaed8e.png">
      </a>
    `;
  }
}
customElements.define('gotandajs-logo', GotandajsLogo);
