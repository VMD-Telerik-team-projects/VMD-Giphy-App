import { CardComponent } from '../components/card.js';

/**
 * The home view of the GIPHY APP.
 * @returns {string} The content for the home view.
 */
export const toHomeView = () => `
<div id="home">
  <h1>Random GIF</h1>
  <div class="content">
    ${CardComponent()}
    </div>
</div>
`;