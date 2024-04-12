import { CardComponent } from '../components/card.js';
import CardContainer from '../components/card-container.js';
import { NAVIGATION, NAV_LINK } from '../common/constants.js';
import { q } from '../events/helpers.js';

/**
 * Create cards for each search result and add to container (which will update main's contents)
 *
 * @param {object} gifs GIF data
 */
export const toSearchView = async (gifs) => {
  const container = new CardContainer();

  gifs.data.forEach(gif => {
    const img = gif.images.original.url;
    const username = gif.username;

    const card = CardComponent(img, username);

    container.addCard(card);
  });

  // remove "active" class from navbar when searching
  const nav = q(NAVIGATION);

  nav.childNodes.forEach(async navElement => {
    if (await navElement.classList.contains('nav-link')) {
      if (await navElement.classList.contains('active')) {
        await navElement.classList.remove('active');
      }
    }
  });
};
