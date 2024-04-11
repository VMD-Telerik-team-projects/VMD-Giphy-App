import { CardComponent } from '../components/card.js';

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
   * @param {CardComponent} card
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
    document.querySelector('main').appendChild(container);
  }


  /**
   * Updates the container and loads into HTML using the private addToHTML method
   *
   * @private
   */
  #updateContainer() {
    // TODO: Load h2 dynamically (title of page)
    this.#container.innerHTML = `<h2>Search GIFs for "gray cat":</h2>` + this.#cards.join('');
    console.log(this.#cards.join('\n'));
    this.#addToHTML(this.#container);
  }
};
