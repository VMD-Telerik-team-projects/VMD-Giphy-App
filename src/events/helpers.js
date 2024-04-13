import { FAVORITES } from '../common/constants.js';

/**
 * Shorthand for document.querySelector
 * @param {string} selector
 * @return {Element}
 */
export const q = (selector) => document.querySelector(selector);

/**
 * Shorthand for document.querySelectorAll
 * @param {string} selector
 * @return {NodeLists<Element>}
 */
export const qs = (selector) => document.querySelectorAll(selector);

/**
 *
 * @param {string} page
 */
export const setActiveNav = (page) => {
  const navs = qs('a.nav-link');

  Array
    .from(navs)
    .forEach(element => element
      .getAttribute('data-page') === page ?
      element.classList.add('active') :
      element.classList.remove('active'),
    );
};

/**
 * Get the search term from the input field
 * @return {string} String value of input field
 */
export const getSearchTerm = () => {
  const search = q('input#search');

  return search.value;
};

//  TODO: Check if element is in localStorage
//  TODO: Finish documenting the function
/**
 * Check if the element is added to favorites
 *
 * @param {any} element Element to check
 * @return {boolean}
 */
export const isAddedToFavorites = (element) => {
  return !element.classList.includes(FAVORITES);
};
