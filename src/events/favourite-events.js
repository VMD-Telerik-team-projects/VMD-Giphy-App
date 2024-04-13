export function addToFavorites(gif) {
    let favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
    const isAlreadyFavorite = favorites.some(favorite => favorite.id === gif.id);
  
    if (!isAlreadyFavorite) {
      favorites.push(gif);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('GIF added to favorites!');
    } else {
      alert('GIF is already in favorites!');
    }
  }
  
  export function removeFromFavorites(id) {
    let favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
    favorites = favorites.filter(gif => gif.id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('GIF removed from favorites!');
  }
  
  export function clearFavorites() {
    localStorage.removeItem('favorites');
    alert('All GIFs removed from favorites!');
  }
  
  export function getFavorites() {
    return localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
  }

  export function isGifInFavorites(id) {
    const favorites = getFavorites();
    return favorites.some(favorite => favorite.id === id);
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