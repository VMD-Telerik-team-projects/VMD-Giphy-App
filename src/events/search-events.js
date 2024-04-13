import { fetchObjectFromServer } from '../api/api-access.js';
import { toSearchView } from '../views/search-view.js';
import { SEARCH } from '../common/constants.js';

export async function renderSearchItems(searchTerm) {
  const search = await fetchObjectFromServer(SEARCH, searchTerm, 'g', 50);
  await toSearchView(search);
}
