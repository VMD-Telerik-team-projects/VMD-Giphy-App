// import { fetchObjectFromServer } from "../api-access.js";
import { loadPage } from './events/navigation-events.js';
import {
  DATA_PAGE,
  GIF_INPUT_SELECTOR,
  HOME,
  NAV_LINK,
  SEARCH,
  SEARCH_SELECTOR,
  BODY,
  DIDO_THEME,
  VLADI_THEME,
} from './common/constants.js';
import { getSearchTerm, q } from './events/helpers.js';
import { uploadGIFToServer } from './api/api-access.js';
import { toggleStar } from './events/favourite-events.js';
import { renderGifDetails } from './events/details-events.js';

document.addEventListener('DOMContentLoaded', () => {
  // clear search input
  q(SEARCH_SELECTOR).value = '';

  // add global event listener
  document.addEventListener('click', async (event) => {
    if (event.target.classList.contains(NAV_LINK)) {
      loadPage(event.target.getAttribute(DATA_PAGE));
    }

    // gif upload event
    if (event.target.classList.contains('gif-upload-btn')) {
      const fileBuffer = q(GIF_INPUT_SELECTOR).files[0].arrayBuffer();

      fileBuffer.then(() => {
        uploadGIFToServer();
      });
    }

    // gif details event
    if (event.target.id === 'view-details') {
      const cardComponent = event.target.closest('.card-component');
      const gifId = cardComponent.getAttribute('data-gif-id');

      await renderGifDetails(gifId);
    }

    // add to-favorites button event
    if (event.target.id === 'add-to-favorites') {
      const cardComponent = event.target.closest('.card-component');
      const gifId = cardComponent.getAttribute('data-gif-id');

      await toggleStar(event.target, gifId);
    }

    // switch themes event

    if (event.target.id === 'switch-theme') {
      const body = q(BODY);

      if (body.classList.contains(DIDO_THEME)) {
        body.classList.remove(DIDO_THEME);
        body.classList.add(VLADI_THEME);
      } else {
        body.classList.remove(VLADI_THEME);
        body.classList.add(DIDO_THEME);
      }
    }
  });

  // input event listener
  q(SEARCH_SELECTOR).addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      loadPage(SEARCH, getSearchTerm());
    }
  });

  // load home page
  loadPage(HOME);
});
