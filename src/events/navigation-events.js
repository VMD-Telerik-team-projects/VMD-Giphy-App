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
