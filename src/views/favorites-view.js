/**
 * It displays a list of favourite GIFs.
 *
 * @param {Object} gifs - An array of GIF objects representing the favourite GIFs.
 * @return {string} The HTML content displaying the list of favorites.
 */
export const favoritesView = (gifs) => `
<div id="gifs">
  <h1>Favorite GIFs:</h1>
  <div class="content">
    ${gifs.map(gif => `
      <div class="gif">
        <img src="${gif.images.original.url}" alt="${gif.title}">
        <p>${gif.title}</p>
      </div>
    `).join('\n') || '<p>Favorites category is empty.</p>'}
  </div>
</div>
`;
