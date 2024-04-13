// import { fetchObjectFromServer } from "../api-access.js";
import { loadPage } from './events/navigation-events.js';
import { DATA_PAGE, GIF_INPUT_SELECTOR, HOME, NAV_LINK, SEARCH, SEARCH_SELECTOR } from './common/constants.js';
import { getSearchTerm, q } from './events/helpers.js';
import { uploadGIFToServer } from './api/api-access.js';

document.addEventListener('DOMContentLoaded', () => {
  q(SEARCH_SELECTOR).value = '';

  // add global event listener
  document.addEventListener('click', async (event) => {
    // nav events
    if (event.target.classList.contains(NAV_LINK)) {
      loadPage(event.target.getAttribute(DATA_PAGE));
    }

    // gif upload event
    if (event.target.classList.contains('gif-upload-btn')) {
      const fileBuffer = q(GIF_INPUT_SELECTOR)
        .files[0]
        .arrayBuffer();

      fileBuffer
        .then(() => {
          console.log(uploadGIFToServer());
        });
    }

    // TODO: gif details event
    if (event.target.id === 'view-details') {
      console.log('view details clicked');
    }
  });

  // input event listener
  q(SEARCH_SELECTOR).addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      loadPage(SEARCH, getSearchTerm());
    }
  });

  loadPage(HOME);
});
