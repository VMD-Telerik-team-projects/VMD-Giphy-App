// import { fetchObjectFromServer } from "../api-access.js";
import { loadPage } from './events/navigation-events.js';
import { HOME } from './common/constants.js';
import { q } from './events/helpers.js';
import { uploadGIFToServer } from './api/api-access.js';

document.addEventListener('DOMContentLoaded', () => {
  q('input#search').value = '';

  // add global event listener
  document.addEventListener('click', (event) => {
    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    //  TODO: Implement GIF upload here
    //  ! TEST CODE
    //  TODO: Move the array buffer/buffer string conversion someplace else
    if (event.target.classList.contains('gif-upload-btn')) {
      const file = q('#gif-input').files[0];
      const arrBuffer = file.arrayBuffer();

      console.log(file);

      arrBuffer
        .then(() => {
          console.log(uploadGIFToServer());
        });
    }
  });

  loadPage(HOME);
});
