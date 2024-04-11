import {
  HOME,
  // TRENDING,
  // UPLOAD,
  // HISTORY,
  // FAVORITES,
  // ABOUT,
  CONTAINER_SELECTOR,
} from "../common/constants.js";

import { toHomeView } from "../views/home-view.js";
import { setActiveNav } from "./helpers.js";
import { q } from "./helpers.js";

export const loadPage = (page = "") => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case TRENDING:
      setActiveNav(TRENDING);
      return renderCategories();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderFavorites();

    case HISTORY:
      setActiveNav(HISTORY);
      return renderFavorites();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    /* if the app supports error login, use default to log mapping errors */
    default:
      return null;
  }
};

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

// const renderTrading = () => {
//   const categories = loadCategories();

//   q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(categories);
// };

// const renderUpload = () => {
//   const favorites = getFavorites();
//   const movies = favorites.map((id) => loadSingleMovie(id));

//   q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(movies);
// };

// const renderHistory = () => {
//   const favorites = getFavorites();
//   const movies = favorites.map((id) => loadSingleMovie(id));

//   q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(movies);
// };

// const renderFavorites = () => {
//   const favorites = getFavorites();
//   const movies = favorites.map((id) => loadSingleMovie(id));

//   q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(movies);
// };

// const renderAbout = () => {
//   q(CONTAINER_SELECTOR).innerHTML = toAboutView();
// };
import { CONTAINER_SELECTOR, HOME_VIEW, DISPLAY_UPLOADED_VIEW, UPLOAD_VIEW, FAVORITES_VIEW, SEARCH_VIEW, TRENDING_VIEW, GIF_DETAILS_VIEW } from '../common/constants.js';
import { q, setActiveNav } from './helpers.js';
import { gifDetailsView } from '../views/gif-details-view.js';
import { favoritesView } from '../views/favorites-view.js';
import { homeView } from '../views/home-view.js';
import { fetchObjectFromServer } from '../api-access.js';

/**
 * loads the specified page.
 * @param {string} page - The page to be loaded.
 */
export const loadPage = (page = '') => {
    switch (page) {
      case HOME_VIEW:
        setActiveNav(HOME_VIEW);
        return displayHome();
      case DISPLAY_UPLOADED_VIEW:
        setActiveNav(DISPLAY_UPLOADED_VIEW);
        return displayUploadedGifs();
      case UPLOAD_VIEW:
        setActiveNav(UPLOAD_VIEW);
        return displayUpload();
      case FAVORITES_VIEW:
        setActiveNav(FAVORITES_VIEW);
        return displayFavorites();
      case SEARCH_VIEW:
        setActiveNav(SEARCH_VIEW);
        return displaySearch();
      case TRENDING_VIEW:
        setActiveNav(TRENDING_VIEW);
        return displayTrendingGifs();
      case GIF_DETAILS_VIEW:
        setActiveNav(GIF_DETAILS_VIEW);
        return displayGifDetails();
      default:
        return null;
    }
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
export const displayFavorites = async () => {
  try {
    const favorites = await fetchObjectFromServer('favorites');
    q(CONTAINER_SELECTOR).innerHTML = favoritesView(favorites);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Displays the home view.
 */
export const displayHome = () => {
    q(CONTAINER_SELECTOR).innerHTML = homeView();
  };
