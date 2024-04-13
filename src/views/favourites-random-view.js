import { CardComponent } from '../components/card.js';

/**
 * The favourites random view of the GIPHY APP.
 * @return {string} The content for the favourites if no favourites are added.
 */
export const tofavouritesRandom = () => `
<div id="favourites">
  <h1>You don't have any favourites, so here is a random GIF ⭐</h1>
  <div class="content">
    ${CardComponent()}
    </div>
</div>
`;
