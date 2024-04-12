import { CardComponent } from '../components/card.js';
import { fetchObjectFromServer } from '../api/api-access.js';
import { RANDOM } from '../common/constants.js';

//  TODO: Implement a "Generate Random GIF" functionality
const generateRandomGif = async () => {
  const gif = await fetchObjectFromServer(RANDOM);

  return gif;
};

/**
 * The home view of the GIPHY APP.
 * @return {string} The content for the home view.
 */
export const toHomeView = async () => {
  const gif = await generateRandomGif();
  const img = gif.data.images.original.url;
  const username = gif.data.username;
  
  return `
  <div id="home">
    <h1>Random GIF</h1>
    <div class="content">
      ${CardComponent(img, username)}
      </div>
  </div>`;
}
