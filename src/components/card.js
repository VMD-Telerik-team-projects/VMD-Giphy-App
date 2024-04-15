import { EMPTY_STAR, FULL_STAR } from '../common/constants.js';
import { FAVORITES } from '../common/constants.js';

/**
 * Create a card with an image, username, details link, and a favorites functionality
 *
 * @author Deyan
 * @param {string} img Link to image
 * @param {string} username Uploader's username
 * @param {string} id Gif ID
 * @return {string} Card component
 */
export const CardComponent = (img, username, id) => {
  const favorites = localStorage.getItem(FAVORITES) ?
    JSON.parse(localStorage.getItem(FAVORITES)) :
    [];

  const isStarred = favorites.some((favorite) => favorite.id === id) ?
    FULL_STAR :
    EMPTY_STAR;

  return `
  <div class="card-component" data-gif-id="${id}" >
    <img src="${img}" />
    <a href="#">@${username}</a>
    <button id="view-details" class="glow-on-hover" href="#">
      View Details
    </button>
    <button id="add-to-favorites" href="#">
      ${isStarred}
    </button>
  </div>
  `;
};
