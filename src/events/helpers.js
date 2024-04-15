import { ACTIVE, DATA_PAGE, SEARCH_SELECTOR } from '../common/constants.js';

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
 * Set the active navigation link
 * @param {string} page Current navigation page
 */
export const setActiveNav = (page) => {
  const navs = qs('a.nav-link');

  Array
    .from(navs)
    .forEach(element => element
      .getAttribute(DATA_PAGE) === page ?
      element.classList.add(ACTIVE) :
      element.classList.remove(ACTIVE),
    );
};

/**
 * Get the search term from the input field
 *
 * @author Deyan
 * @return {string} String value of input field
 */
export const getSearchTerm = () => {
  const search = q(SEARCH_SELECTOR);

  return search.value;
};
