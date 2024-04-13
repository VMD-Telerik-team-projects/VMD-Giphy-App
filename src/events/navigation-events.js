import {
  CONTAINER_SELECTOR,
  HOME,
  UPLOAD,
  ABOUT,
  FAVORITES,
  TRENDING,
  SEARCH,
  HISTORY,
} from "../common/constants.js";
import { q, setActiveNav } from "./helpers.js";
import { gifDetailsView } from "../views/gif-details-view.js";
import { toHomeView } from "../views/home-view.js";
import { fetchObjectFromServer } from "../api/api-access.js";
import { toUploadView } from "../views/upload-view.js";
import { toAboutView } from "../views/about-view.js";
import { tofavouritesRandom } from "../views/favourites-random-view.js";
import { renderTrendingItems } from "./trending-events.js";
import { renderSearchItems } from "./search-events.js";
import { renderUploadedGifs } from "./history-events.js";

/**
 * loads the specified page.
 * @param {string} page - The page to be loaded.
 * @param {string} [searchTerm] - The search term (optional).
 */
export const loadPage = async (page = "", searchTerm) => {
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

/**
 * Displays the home view.
 */
export const displayHome = async () => {
  q(CONTAINER_SELECTOR).innerHTML = await toHomeView();
};

/**
 * Displays the about view.
 */
export const displayAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

/**
 * Displays the search view.
 */
export const displaySearch = async (query) => {
  await renderSearchItems(query);
};

/**
 * Displays the trending GIFs.
 */
const displayTrendingGifs = async () => {
  await renderTrendingItems();
};

/**
 * Displays the uploaded GIFs.
 */
const displayUploaded = async () => {
  await renderUploadedGifs();
};

/**
 * Displays the upload page view.
 */
export const uploadFn = () => {
  console.log("upload");

  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

/**
 * Displays GIF details.
 * @param {string} gif
 */
export const displayGifDetails = async (gif) => {
  try {
    const gif = await fetchObjectFromServer("details");
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
