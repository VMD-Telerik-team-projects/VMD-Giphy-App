export default class APIAccess {
  static #DATA = {
    'apiKey': '5GYey1g40Kqb3LgSi65mxgNVU8vQzqyb',
    'backupKey': '7qWYwkTVNOZKswZkyuMAw5CELCsDBfaa',
    'baseURL': 'https://api.giphy.com/v1/gifs/',
    'endpoints': {
      'TRENDING': 'trending',
      'SEARCH': 'search',
      'RANDOM': 'random',
    },
    'uploadURL': 'https://upload.giphy.com/v1/gifs',
  };

  /**
   * Create URLs for API access
   *
   * @static
   * @param {string} endpoint Endpoint
   * @param {string} [query] Query (optional)
   * @param {string} [rating] Rating (optional) (default = "g")
   * @param {number} [GIFLimit] GIF Limit (optional) (default = 25)
   * @param {boolean} [useBackUpKey] Use backup key when API access limit is exceeded (optional) (default = false)
   * @return {string}
   */
  static #URLBuilder(endpoint, query, rating = 'g', GIFLimit = 25, useBackUpKey = false) {
    // use backup key
    const apiKey = !useBackUpKey ?
      APIAccess.#DATA.apiKey :
      APIAccess.#DATA.backupKey;

    const baseURL = APIAccess.#DATA.baseURL;
    const point = APIAccess.#DATA.endpoints[endpoint.toUpperCase()];

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
  }

  /**
   * Public interface for fetching data from the server
   *
   * @async
   * @static
   * @param {string} endpoint API Endpoint
   * @param {string} [query] API Query i.e. search (optional)
   * @param {string} [rating] Rating (optional)
   * @param {number} [limit] Number of GIFs returned (optional)
   * @param {boolean} [useBackUpKey] Use backup key when API access limit is exceeded (optional)
   * @returns {Promise<object>}
   */
  static async fetchObjectFromServer(endpoint, query, rating, limit, useBackUpKey = false) {
    const url = APIAccess.#URLBuilder(endpoint, query, rating, limit, useBackUpKey);

    return await fetch(url)
      .then(async (res) => {
        const data = await res.json();

        // if the limit of 100 API calls per hour is exceeded, use backup key
        if (data.meta.status === 429 && !useBackUpKey) {
          return APIAccess.fetchObjectFromServer(endpoint, query, rating, limit, true);
        } else {
          return data;
        }
      });
  }
}
