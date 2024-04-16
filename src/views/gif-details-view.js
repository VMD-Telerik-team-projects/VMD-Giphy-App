/**
 * It displays detailed information about a GIF
 *
 * @author Vladislava
 * @param {Object} gif - The GIF object containing the details ID, title, username, date.
 * @return {string} The HTML content that displays the GIF details.
 */
export const gifDetailsView = async (gif) =>
  `
<div class="gif-details">
  <div class="details-content">
    <img src="${gif.data.images.original.url}" alt="${gif.data.title}">
  </div>
  <div class="gif-info">
    <p><b>Title:</b> ${gif.data.title}</p>
    <p><b>Uploaded by:</b> ${gif.data.user ? gif.data.user.username : 'Unknown'}</p>
    <p><b>Upload Date:</b> ${gif.data.import_datetime}</p>
  </div>
</div>
`;
