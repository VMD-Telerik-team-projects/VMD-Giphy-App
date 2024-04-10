import { fetchObjectFromServer } from './api/api-access.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchObjectFromServer('random')
    .then(res => console.log(res))
    .catch(err => console.error(err));
});
