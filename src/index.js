// import { fetchObjectFromServer } from "../api-access.js";
import { loadPage } from './events/navigation-events.js';
import { CONTAINER_SELECTOR, HOME } from './common/constants.js';
import { getSearchTerm, q } from './events/helpers.js';
import { fetchObjectFromServer, uploadGIFToServer } from './api/api-access.js';
import { gifDetailsView } from './views/gif-details-view.js';

document.addEventListener('DOMContentLoaded', () => {
  q('input#search').value = '';

  // add global event listener
  document.addEventListener('click', async (event) => {
    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    // gif upload event
    if (event.target.classList.contains('gif-upload-btn')) {
      const fileBuffer = q('#gif-input').files[0].arrayBuffer();

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
  q('input#search').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      loadPage('search', getSearchTerm());
    }
  });

  loadPage(HOME);
});
