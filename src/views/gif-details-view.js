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
    <p>ID: ${gif.data.id}</p>
    <p>Title: ${gif.data.title}</p>
    <p>Rating: ${gif.data.rating}</p>
    <p>Uploader: ${gif.data.user ? gif.data.user.username : 'Unknown'}</p>
    <p>Upload Date: ${gif.data.import_datetime}</p>
    <p>Source: ${gif.data.source}</p>
  </div>
</div>
`;
