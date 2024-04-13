export default class CardContainer {
  #cards = [];
  #container;

  constructor() {
    this.#container = document.createElement('div');
    this.#container.classList.add('card-container');
    this.render();
  }

  /**
   * Add a card to the container and update container (which updates the main section)
   *
   * @param {string} card
   */
  addCard(card) {
    this.#cards.push(card);
  }

  /**
   * Updates the container and loads into HTML using the private addToHTML method
   */
  render(title) {
    this.#container.innerHTML = this.#cards.join('');
    this.#addToHTML(title, this.#container);
  }

  /**
   * Load container dynamically in HTML
   *
   * @private
   * @param {string} title
   * @param {HTMLElement} container
   */
  #addToHTML(title, container) {
    const node = document.querySelector('main');
    //  Update: main needs to be refreshed every time a card container is added
    while (node.firstChild) {
      node.removeChild(node.lastChild);
    }

    // load page title dynamically
    const h2 = document.createElement('h2');
    h2.innerText = title;
    h2.classList.add('global-h2');
    node.appendChild(h2);

    node.appendChild(container);
  }
};
