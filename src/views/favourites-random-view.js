import { CardComponent } from '../components/card.js';
import { fetchObjectFromServer } from '../api/api-access.js';
import { RANDOM } from '../common/constants.js';

/**
 * The favourites random view of the GIPHY APP.
 * @return {string} The content for the favourites if no favourites are added.
 */
export const tofavouritesRandom = async () => {
  const gif = await fetchObjectFromServer(RANDOM);
  const img = gif.data.images.original.url;
  const username = gif.data.username;
  const id = gif.data.id;

  return `
    <div id="favourites">
      <h1>You don't have any favourites, so here is a random GIF ⭐</h1>
      <div class="content">
        ${CardComponent(img, username, id)}
      </div>
    </div>
  `;
};
