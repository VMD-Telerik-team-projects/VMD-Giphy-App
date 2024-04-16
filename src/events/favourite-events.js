import { fetchDetailsFromServer } from '../api/api-access.js';
import { FAVORITES, FULL_STAR, EMPTY_STAR } from '../common/constants.js';
import { loadPage } from './navigation-events.js';

/**
 * Adds a GIF to favorites storing them in the local storage. It checks if the gif is in favorites or not, and if it's not - it adds the GIF to the favorites array and updates the local storage.
 * 
 * @author Vladislava
 * @async
 * @param {Object} gif - The GIF object to be added to favorites.
 * @returns {Promise<object>}
 */
export async function addToFavorites(gif) {
  console.log(gif);
  const favorites = localStorage.getItem(FAVORITES) ?
    JSON.parse(localStorage.getItem(FAVORITES)) :
    [];
  const isAlreadyFavorite = favorites.some(
    (favorite) => favorite.id === gif.data.id,
  );

  if (!isAlreadyFavorite) {
    favorites.push(gif.data);
    localStorage.setItem(FAVORITES, JSON.stringify(favorites));

    alert('GIF added to favorites!');
  } else {
    alert('GIF is already in favorites!');
  }
}

/**
 * 
 * Removes a GIF from favorites (stored in the local storage)
 * 
 * @author Vladislava
 * @async
 * @param {string} id The id of the GIF that is removed from favorites.
 * @returns {Promise<object>}
 */
export async function removeFromFavorites(id) {
  let favorites = localStorage.getItem(FAVORITES) ?
    JSON.parse(localStorage.getItem(FAVORITES)) :
    [];
  favorites = favorites.filter((gif) => gif.id !== id);

  localStorage.setItem(FAVORITES, JSON.stringify(favorites));

  alert('GIF removed from favorites!');
}

/**
 * Toggle between empty and full star icons
 *
 * @author Vladislava
 * @async
 * @param {HTMLElement} button The button element to toggle the start icon
 * @param {string} id The id of the gif
 */
export const toggleStar = async (button, id) => {
  const gif = await fetchDetailsFromServer(id);
  if (button.innerHTML.trim() === EMPTY_STAR.trim()) {
    button.innerHTML = FULL_STAR;
    await addToFavorites(gif);
  } else {
    button.innerHTML = EMPTY_STAR;
    await removeFromFavorites(id);
    loadPage(FAVORITES);
  }
};
