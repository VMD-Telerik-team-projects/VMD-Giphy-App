/**
 * The home view of the GIPHY APP.
 *
 * @author Deyan, Vladi
 * @return {string} The content for the home view.
 */
export const toAboutView = () => `
<div id="about">
  <div class="content">
  <img src="./src/img/bubbles.gif" alt="GIPHY Logo" class="content-image">
    <h1 id="#topH1">Welcome to the GIPHY APP</h1>
    <h1>Created by: Group 2</h1>
    <h1>Date: 2024</h1>
    <button id="switch-theme" class="glow-on-hover">
      Switch Theme
    </button>
  </div>
</div>
`;
