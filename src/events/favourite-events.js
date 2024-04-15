import { fetchDetailsFromServer } from '../api/api-access.js';
import { FAVORITES, FULL_STAR, EMPTY_STAR } from '../common/constants.js';
import { loadPage } from './navigation-events.js';

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

export async function removeFromFavorites(id) {
  let favorites = localStorage.getItem(FAVORITES) ?
    JSON.parse(localStorage.getItem(FAVORITES)) :
    [];
  favorites = favorites.filter((gif) => gif.id !== id);

  localStorage.setItem(FAVORITES, JSON.stringify(favorites));

  alert('GIF removed from favorites!');
}

export async function clearFavorites() {
  localStorage.removeItem(FAVORITES);
  alert('All GIFs removed from favorites!');
}

export async function getFavorites() {
  return localStorage.getItem(FAVORITES) ?
    JSON.parse(localStorage.getItem(FAVORITES)) :
    [];
}

export async function isGifInFavorites(id) {
  const favorites = await getFavorites();
  return favorites.some((favorite) => favorite.id === id);
}

export async function getStar(gif) {
  const isFavorite = await isGifInFavorites(gif.id);
  return isFavorite ? FULL_STAR : EMPTY_STAR;
}

export async function toggleFavorite(gif) {
  const isFavorite = await isGifInFavorites(gif.id);
  if (isFavorite) {
    await removeFromFavorites(gif.id);
  } else {
    await addToFavorites(gif);
  }

  return !isFavorite;
}

/**
 * Toggle between empty and full star icons
 * @param {HTMLElement} button The button element to toggle the start icon
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
