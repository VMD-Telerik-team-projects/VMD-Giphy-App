/**
 * It displays detailed information about a GIF
 *
 * @param {Object} gif - The GIF object containing the details ID, title, rating, username, date and source.
 * @return {string} The HTML content that displays the GIF details.
 */
export const gifDetailsView = (gif) => `
<div class="gif-details">
  <div class="details-content">
    <img src="${gif.images.original.url}" alt="${gif.title}">
  </div>
  <div class="gif-info">
    <p>ID: ${gif.id}</p>
    <p>Title: ${gif.title}</p>
    <p>Rating: ${gif.rating}</p>
    <p>Uploader: ${gif.user ? gif.user.username : 'Unknown'}</p>
    <p>Upload Date: ${gif.import_datetime}</p>
    <p>Source: ${gif.source}</p>
  </div>
</div>
`;
