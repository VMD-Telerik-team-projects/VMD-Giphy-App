import {
  CONTAINER_SELECTOR,
  HOME,
  UPLOAD,
  ABOUT,
  FAVORITES,
  TRENDING,
  SEARCH,
  HISTORY,
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

/**
 * loads the specified page.
 * @param {string} page - The page to be loaded.
 * @param {string} [searchTerm] - The search term (optional).
 */
export const loadPage = async (page = '', searchTerm) => {
  switch (page) {
  case HOME:
    setActiveNav(HOME);
    return await displayHome();
  case ABOUT:
    setActiveNav(ABOUT);
    return displayAbout();
  case SEARCH:
    setActiveNav(SEARCH);
    return displaySearch(searchTerm);
  case UPLOAD:
    setActiveNav(UPLOAD);
    return uploadFn();
  case TRENDING:
    setActiveNav(TRENDING);
    return displayTrendingGifs();
  case HISTORY:
    setActiveNav(HISTORY);
    return displayUploaded();
  case FAVORITES:
    setActiveNav(FAVORITES);
    displayFavorites();
  default:
    return null;
  }
};

/** Displays the home view. */
export const displayHome = async () => {
  q(CONTAINER_SELECTOR).innerHTML = await toHomeView();
};

/** Displays the about view. */
export const displayAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

/**
 * Displays the search view.
 * @param {string} query The search query.
 */
const displaySearch = async (query) => {
  await renderSearchItems(query);
};

/** Displays the trending GIFs. */
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

/** Displays GIF details. */
export const displayGifDetails = () => {
  try {
    q(CONTAINER_SELECTOR).innerHTML = gifs
      .map((gif) => gifDetailsView(gif))
      .join('');
  } catch (error) {
    console.error(error);
  }
};

/** Displays favorite GIFs. */
export const displayFavorites = () => {
  try {
    const favorites = localStorage.getItem(FAVORITES) ?
      JSON.parse(localStorage.getItem(FAVORITES)) :
      [];
    if (favorites.length === 0) {
      displayFavoritesRandom();
      // q(CONTAINER_SELECTOR).innerHTML = favoritesView([]);
    } else {
      q(CONTAINER_SELECTOR).innerHTML = favorites
        .map((gif) => gifDetailsView(gif))
        .join('');
    }
  } catch (error) {
    console.error(error);
  }
};

/** Displays favorite GIFs - random. */
export const displayFavoritesRandom = async () => {
  q(CONTAINER_SELECTOR).innerHTML = await tofavouritesRandom();
};
