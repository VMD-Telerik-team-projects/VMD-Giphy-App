import { fetchObjectFromServer } from '../api/api-access.js';
import { toTrendingView } from '../views/trending-view.js';
import { TRENDING } from '../common/constants.js';

export async function renderTrendingItems() {
  const trending = await fetchObjectFromServer(TRENDING, undefined, undefined, 50);
  await toTrendingView(trending);
}
