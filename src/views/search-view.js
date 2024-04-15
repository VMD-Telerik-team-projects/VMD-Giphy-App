import { CardComponent } from '../components/card.js';
import CardContainer from '../components/card-container.js';
import { NAVIGATION, NAV_LINK, ACTIVE } from '../common/constants.js';
import { getSearchTerm, q } from '../events/helpers.js';

/**
 * Create cards for each search result and add to container (which will update main's contents)
 *
 * @param {object} gifs GIF data
 */
export const toSearchView = async (gifs) => {
  const container = new CardContainer();

  gifs.data.forEach((gif) => {
    const img = gif.images.original.url;
    const username = gif.username;
    const id = gif.id;

    const card = CardComponent(img, username, id);

    container.addCard(card);
  });

  container.render(`Search results for "${getSearchTerm()}":`);

  // remove "active" class from navbar when searching
  const nav = q(NAVIGATION);

  nav.childNodes.forEach(async (navElement) => {
    if (await navElement.classList.contains(NAV_LINK)) {
      if (await navElement.classList.contains(ACTIVE)) {
        await navElement.classList.remove(ACTIVE);
      }
    }
  });
};
