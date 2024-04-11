/* eslint-disable new-cap */
/* eslint-disable func-style */
import { APIData } from './api-data.js';

let keyIndex = 0;

/**
   * Create URLs for API access
   *
   * @param {string} endpoint Endpoint
   * @param {string} [query] Query (optional)
   * @param {string} [rating] Rating (optional) (default = "g")
   * @param {number} [GIFLimit] GIF Limit (optional) (default = 25)
   * @param {number} [indexOfKey] Track which key needs to be used
   * @return {string}
   */
const URLBuilder = (endpoint, query, rating = 'g', GIFLimit = 25, indexOfKey) => {
  const apiKey = APIData.keys[indexOfKey];
  const baseURL = APIData.baseURL;
  const point = APIData.endpoints[endpoint.toUpperCase()];

  FormData()

  switch (point) {
  case 'random':
    return `${baseURL}${point}?api_key=${apiKey}&rating=${rating}`;
  case 'trending':
    return `${baseURL}${point}?api_key=${apiKey}&limit=${GIFLimit}&rating=${rating}`;
  case 'search':
    if (!query && query !== 0) {
      throw new Error('Search query cannot be undefined or null!');
    }

    // replace white spaces with '+' signs (replaceAll doesn't work for some reason, maybe it's too new for the browser)
    query = query.split(' ');
    query = query.join('+');

    return `${baseURL}${point}?api_key=${apiKey}&q=${query}&limit=${GIFLimit}&rating=${rating}`;
  default:
    throw new Error('Invalid endpoint!');
  }
};

/**
  * Public interface for fetching data from the server
  *
  * @async
  * @param {string} endpoint API Endpoint
  * @param {string} [query] API Query i.e. search (optional)
  * @param {string} [rating] Rating (optional)
  * @param {number} [limit] Number of GIFs returned (optional)
  * @param {number} [indexOfKey] Track which key needs to be used (optional)
  * @return {Promise<object>}
*/
export async function fetchObjectFromServer(endpoint, query, rating, limit, indexOfKey = keyIndex) {
  const url = URLBuilder(endpoint, query, rating, limit, indexOfKey);

  return await fetch(url)
    .then(async (res) => {
      const data = await res.json();

      // if the limit of 100 API calls per hour is exceeded, use backup key
      if (data.meta.status === 429) {
        keyIndex++;
        return fetchObjectFromServer(endpoint, query, rating, limit, keyIndex);
      } else {
        return data;
      }
    });
}


