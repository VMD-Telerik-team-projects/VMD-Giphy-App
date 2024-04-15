import { CardComponent } from '../components/card.js';
import { fetchObjectFromServer } from '../api/api-access.js';
import { RANDOM } from '../common/constants.js';

/**
 * The home view of the GIPHY APP.
 *
 * @author Deyan
 * @return {string} The content for the home view.
 */
export const toHomeView = async () => {
  const gif = await fetchObjectFromServer(RANDOM);
  const img = gif.data.images.original.url;
  const username = gif.data.username;
  const id = gif.data.id;

  return `
  <div id="home">
  <p> Join our vibrant community of gif enthusiasts! ☻ </p>
    <h2 class="global-h2">Random GIF</h2>
    <div class="content">
      ${CardComponent(img, username, id)}
      </div>
  </div>`;
};
