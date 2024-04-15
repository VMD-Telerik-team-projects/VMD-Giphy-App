import { fetchObjectFromServer } from '../api/api-access.js';
import { toSearchView } from '../views/search-view.js';
import { DEFAULT_GIF_LIMIT, DEFAULT_RATING, SEARCH } from '../common/constants.js';

/**
 * Renders items that match the search query.
 * @param {string} searchTerm Search query
 */
export async function renderSearchItems(searchTerm) {
  const search = await fetchObjectFromServer(SEARCH, searchTerm, DEFAULT_RATING, DEFAULT_GIF_LIMIT);
  await toSearchView(search);
}
