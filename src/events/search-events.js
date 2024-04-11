import { fetchObjectFromServer } from '../api/api-access.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
import { toSearchView } from '../views/search-view.js';

export async function renderSearchItems(searchTerm) {
  const search = await fetchObjectFromServer('search', searchTerm, 'g', 100);
  return toSearchView(search);
}