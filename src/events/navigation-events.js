import {
  CONTAINER_SELECTOR,
  HOME,
  UPLOAD,
  ABOUT,
  FAVORITES
} from '../common/constants.js';
import { q, setActiveNav } from './helpers.js';
import { gifDetailsView } from '../views/gif-details-view.js';
import { favoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { fetchObjectFromServer } from '../api/api-access.js';
import { toUploadView } from '../views/upload-view.js';
import { toAboutView } from '../views/about-view.js';
import { tofavouritesRandom } from '../views/favourites-random-view.js';

/**
 * loads the specified page.
 * @param {string} page - The page to be loaded.
 */
export const loadPage = (page = '') => {
  switch (page) {
  case HOME:
    setActiveNav(HOME);
    return displayHome();
  case ABOUT:
    setActiveNav(ABOUT);
    return displayAbout();
    // case DISPLAY_UPLOADED_VIEW:
    //   setActiveNav(DISPLAY_UPLOADED_VIEW);
    //   return displayUploadedGifs();
  case UPLOAD:
    setActiveNav(UPLOAD);
    return uploadFn();
    case FAVORITES:
      setActiveNav(FAVORITES);
      displayFavorites();
    // case SEARCH_VIEW:
    //   setActiveNav(SEARCH_VIEW);
    //   return displaySearch();
    // case TRENDING_VIEW:
    //   setActiveNav(TRENDING_VIEW);
    //   return displayTrendingGifs();
    // case GIF_DETAILS_VIEW:
    //   setActiveNav(GIF_DETAILS_VIEW);
    //   return displayGifDetails();
  default:
    return null;
  }
};

/**
 * Displays the home view.
 */
export const displayHome = () => {
  console.log('home');
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

export const displayAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const displaySearch = () => {
  q(CONTAINER_SELECTOR).innerHTML = toSearchView();
};

/**
 * Displays the upload page view.
 */
export const uploadFn = () => {
  console.log('upload');

  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

/**
 * Displays GIF details.
 * @param {string} gif
 */
export const displayGifDetails = async (gif) => {
  try {
    const gif = await fetchObjectFromServer('details');
    q(CONTAINER_SELECTOR).innerHTML = gifDetailsView(gif);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Displays favorite GIFs.
 */
//export const displayFavorites = async () => {
  //try {
    //const favorites = await fetchObjectFromServer('favorites');
    //q(CONTAINER_SELECTOR).innerHTML = favoritesView(favorites);
  //} catch (error) {
    //console.error(error);
  //}
//};

/**
 * Displays favorite GIFs - random.
 */
export const displayFavorites = () => {
  q(CONTAINER_SELECTOR).innerHTML = tofavouritesRandom();
};