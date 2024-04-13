import { fetchObjectFromServer } from '../api/api-access.js';
import { toSearchView } from '../views/search-view.js';
import { DEFAULT_GIF_LIMIT, DEFAULT_RATING, SEARCH } from '../common/constants.js';

export async function renderSearchItems(searchTerm) {
  const search = await fetchObjectFromServer(SEARCH, searchTerm, DEFAULT_RATING, DEFAULT_GIF_LIMIT);
  await toSearchView(search);
}
