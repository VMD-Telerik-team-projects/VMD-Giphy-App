import { EMPTY_STAR } from "../common/constants.js";

/**
 * Create a card with an image, username, details link, and a favorites functionality
 *
 * @param {string} img Link to image
 * @param {string} username Uploader's username
 * @return {string} Card component
 */
export const CardComponent = (img, username, id) => `
<div class="card-component" data-gif-id="${id}" >
  <img src="${img}" />
  <a href="#">@${username}</a>
  <button id="view-details" class="glow-on-hover" href="#">
    View Details
  </button>
  <button id="add-to-favorites" href="#">
    ${EMPTY_STAR}
  </button>
</div>
`;
