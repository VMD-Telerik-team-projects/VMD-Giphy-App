import { EMPTY_STAR, FULL_STAR } from '../common/constants.js';

/**
 * Create a card with an image, username, details link, and a favorites functionality
 *
 * @param {string} img Link to image
 * @param {string} username Uploader's username
 * @return {string} Card component
 */
export const CardComponent = (img, username) => `
<div class="card-component">
  <img src="${img}" />
  <a href="#">@${username}</a>
  <button id="view-details" href="#">
    View Details
  </button>
  <a id="add-to-favorites" href="#">
    ${EMPTY_STAR}
  </a>
</div>
`;
