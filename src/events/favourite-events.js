import { fetchDetailsFromServer } from "../api/api-access.js";
import { FAVORITES, FULL_STAR, EMPTY_STAR } from "../common/constants.js";

export async function addToFavorites(gif) {
  console.log(gif);
  const favorites = localStorage.getItem(FAVORITES)
    ? JSON.parse(localStorage.getItem(FAVORITES))
    : [];
  const isAlreadyFavorite = favorites.some(
    (favorite) => favorite.id === gif.data.id
  );

  if (!isAlreadyFavorite) {
    favorites.push(gif.data);
    localStorage.setItem(FAVORITES, JSON.stringify(favorites));

    alert("GIF added to favorites!");
  } else {
    alert("GIF is already in favorites!");
  }
}

export function removeFromFavorites(id) {
  let favorites = localStorage.getItem(FAVORITES)
    ? JSON.parse(localStorage.getItem(FAVORITES))
    : [];
  favorites = favorites.filter((gif) => gif.id !== id);

  localStorage.setItem(FAVORITES, JSON.stringify(favorites));

  alert("GIF removed from favorites!");
}

export function clearFavorites() {
  localStorage.removeItem(FAVORITES);
  alert("All GIFs removed from favorites!");
}

export function getFavorites() {
  return localStorage.getItem(FAVORITES)
    ? JSON.parse(localStorage.getItem(FAVORITES))
    : [];
}

export function isGifInFavorites(id) {
  const favorites = getFavorites();
  return favorites.some((favorite) => favorite.id === id);
}

export function getStar(gif) {
  const isFavorite = isGifInFavorites(gif.id);
  return isFavorite ? FULL_STAR : EMPTY_STAR;
}

export function toggleFavorite(gif) {
  const isFavorite = isGifInFavorites(gif.id);
  if (isFavorite) {
    removeFromFavorites(gif.id);
  } else {
    addToFavorites(gif);
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
  }
};
