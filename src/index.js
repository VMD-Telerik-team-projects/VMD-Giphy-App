import APIAccess from './api/api-access.js';

document.addEventListener('DOMContentLoaded', () => {
  APIAccess.fetchObjectFromServer('random')
    .then(res => console.log(res))
    .catch(err => console.error(err));

  APIAccess.fetchObjectFromServer('trending')
    .then(res => console.log(res))
    .catch(err => console.error(err));

  APIAccess.fetchObjectFromServer('search', 'white cat', 'g', 50)
    .then(res => console.log(res))
    .catch(err => console.error(err));
});
