import {
  CONTAINER_SELECTOR,
  HOME,
  UPLOAD,
  ABOUT,
  FAVORITES,
  TRENDING,
  SEARCH,
  HISTORY,
  VIEW_DETAILS,
} from '../common/constants.js';
import { q, setActiveNav } from './helpers.js';
import { gifDetailsView } from '../views/gif-details-view.js';
import { toHomeView } from '../views/home-view.js';
import { toUploadView } from '../views/upload-view.js';
import { toAboutView } from '../views/about-view.js';
import { tofavouritesRandom } from '../views/favourites-random-view.js';
import { renderTrendingItems } from './trending-events.js';
import { renderSearchItems } from './search-events.js';
import { renderUploadedGifs } from './history-events.js';
import CardContainer from '../components/card-container.js';
import { CardComponent } from '../components/card.js';

/**
 * Loads the specified page.
 * @param {string} page - The page to be loaded.
 * @param {string} [searchTerm] - The search term (optional).
 */
export const loadPage = async (page = '', searchTerm) => {
  switch (page) {
  case HOME:
    setActiveNav(HOME);
    return await displayHome();
  case TRENDING:
    setActiveNav(TRENDING);
    return displayTrendingGifs();
  case ABOUT:
    setActiveNav(ABOUT);
    return displayAbout();
  case SEARCH:
    setActiveNav(SEARCH);
    return displaySearch(searchTerm);
  case UPLOAD:
    setActiveNav(UPLOAD);
    return uploadFn();
  case HISTORY:
    setActiveNav(HISTORY);
    return displayUploaded();
  case FAVORITES:
    setActiveNav(FAVORITES);
    await displayFavorites();
  case VIEW_DETAILS:
    setActiveNav(VIEW_DETAILS);
    displayFavorites(); // TO DO: displayGifDetails
  default:
    return null;
  }
};

/**
 * Displays the home view.
 *
 * @author Deyan
 * @async
 */
export const displayHome = async () => {
  q(CONTAINER_SELECTOR).innerHTML = await toHomeView();
};

/**
 * Displays the about view.
 * @author Deyan
 */
export const displayAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

/**
 * Displays the search view.
 *
 * @author Deyan
 * @async
 * @param {string} query The search query.
 */
const displaySearch = async (query) => {
  await renderSearchItems(query);
};

/**
 * Displays the trending GIFs.
 *
 * @author Deyan
 * @async
 */
const displayTrendingGifs = async () => {
  await renderTrendingItems();
};

/** Displays the uploaded GIFs. */
const displayUploaded = async () => {
  await renderUploadedGifs();
};

/** Displays the upload page view. */
export const uploadFn = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

/** Displays GIF details. 
 * 
 * @author Vladislava
*/
export const displayGifDetails = () => {
  try {
    q(CONTAINER_SELECTOR).innerHTML = gifs
      .map(async (gif) => await gifDetailsView(gif))
      .join('');
  } catch (error) {
    console.error(error);
  }
};

/** Displays favorite GIFs.
 * If displays random GIFS if there are no GIFs stored.
 * 
 * @async
 * @returns {Promise<object>}
 */
export const displayFavorites = async () => {
  try {
    const favorites = localStorage.getItem(FAVORITES) ?
      JSON.parse(localStorage.getItem(FAVORITES)) :
      [];
    if (favorites.length === 0) {
      displayFavoritesRandom();
    } else {
      const container = new CardContainer();

      favorites.forEach(favEl => {
        const img = favEl.images.original.url;
        const username = favEl.username;
        const id = favEl.id;
        const card = CardComponent(img, username, id);

        container.addCard(card);
      });

      container.render('Favorite GIFs');
    }
  } catch (error) {
    console.error(error);
  }
};

/** Displays favorite GIFs - random. 
 * 
 * @author Vladislava
 * @async
*/
export const displayFavoritesRandom = async () => {
  q(CONTAINER_SELECTOR).innerHTML = await tofavouritesRandom();
};
