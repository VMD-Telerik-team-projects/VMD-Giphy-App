/**
 * It displays detailed information about a GIF
 *
 * @param {Object} gif - The GIF object containing the details ID, title, rating, username, date and source.
 * @return {string} The HTML content that displays the GIF details.
 */
export const gifDetailsView = async (gif) =>
  `
<div class="gif-details">
  <div class="details-content">
    <img src="${gif.data.images.original.url}" alt="${gif.data.title}">
  </div>
  <div class="gif-info">
    <p>Title: ${gif.data.title}</p>
    <p>Uploaded by: ${gif.data.user ? gif.data.user.username : 'Unknown'}</p>
    <p>Upload Date: ${gif.data.import_datetime}</p>
  </div>
</div>
`;
