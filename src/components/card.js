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
  <span>
    <a id="view-details" href="#">
      View Details
    </a>
    <a id="add-to-favorites" href="#">
      ${'☆'}
    </a>
  </span>
</div>
`;
