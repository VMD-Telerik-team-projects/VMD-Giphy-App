export default class CardContainer {
  #cards = [];
  #container;

  constructor() {
    this.#container = document.createElement('div');
    this.#container.classList.add('card-container');
    this.#updateContainer();
  }

  /**
   * Add a card to the container and update container (which updates the main section)
   *
   * @param {string} card
   */
  addCard(card) {
    this.#cards.push(card);
    this.#updateContainer();
  }

  /**
   * Load container dynamically in HTML
   *
   * @private
   * @param {HTMLElement} container
   */
  #addToHTML(container) {
    const node = document.querySelector('main');
    //  Update: main needs to be refreshed every time a card container is added 
    while (node.firstChild) {
      node.removeChild(node.lastChild);
    }

    node.appendChild(container);
  }


  /**
   * Updates the container and loads into HTML using the private addToHTML method
   *
   * @private
   */
  #updateContainer() {
    // TODO: Load h2 dynamically (title of page)
    this.#container.innerHTML = this.#cards.join('');
    this.#addToHTML(this.#container);
  }
};
