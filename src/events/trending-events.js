import { fetchObjectFromServer } from '../api/api-access.js';
import { toTrendingView } from '../views/trending-view.js';
import { TRENDING, DEFAULT_GIF_LIMIT } from '../common/constants.js';

/**
 * Renders the trending gifs.
 */
export async function renderTrendingItems() {
  const trending = await fetchObjectFromServer(TRENDING, undefined, undefined, DEFAULT_GIF_LIMIT);
  await toTrendingView(trending);
}
