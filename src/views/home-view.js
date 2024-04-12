import { CardComponent } from '../components/card.js';


//  TODO: Implement a "Generate Random GIF" functionality
/**
 * The home view of the GIPHY APP.
 * @return {string} The content for the home view.
 */
export const toHomeView = () => `
<div id="home">
  <h1>Random GIF</h1>
  <div class="content">
    ${CardComponent()}
    </div>
</div>
`;
