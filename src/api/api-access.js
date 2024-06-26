/* eslint-disable new-cap */
/* eslint-disable func-style */
import { APIData } from './api-data.js';
import { q } from '../events/helpers.js';
import {
  DEFAULT_GIF_LIMIT,
  DEFAULT_RATING,
  GIF_INPUT_SELECTOR,
  LOCAL_STORAGE_GIF_ID,
} from '../common/constants.js';

let keyIndex = 0;

// PRIVATE INTERFACES

/**
 * Create URLs for API access (GET)
 *
 * @author Deyan
 * @param {string} endpoint Endpoint
 * @param {string} [query] Query (optional)
 * @param {string} [rating] Rating (optional) (default = "g")
 * @param {number} [GIFLimit] GIF Limit (optional) (default = 25)
 * @param {number} [indexOfKey] Track which key needs to be used
 * @return {string}
 */
const URLBuilderGET = (
  endpoint,
  query,
  rating = DEFAULT_RATING,
  GIFLimit = DEFAULT_GIF_LIMIT,
  indexOfKey,
) => {
  const apiKey = APIData.keys[indexOfKey];
  const baseURL = APIData.baseURL;
  const point = APIData.endpoints[endpoint.toUpperCase()];

  switch (point) {
  case 'random':
    return `${baseURL}${point}?api_key=${apiKey}&rating=${rating}`;
  case 'trending':
    return `${baseURL}${point}?api_key=${apiKey}&limit=${GIFLimit}&rating=${rating}`;
  case 'history':
    return `${baseURL}?api_key=${apiKey}&ids=${query}`;
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
 * Create URL for uploading using the public API (POST)
 *
 * @author Deyan
 * @param {number} [indexOfKey] Index of access key (optional)
 * @return {string}
 */
const URLBuilderPOST = (indexOfKey) => {
  const apiKey = APIData.keys[indexOfKey];
  const baseURL = APIData.uploadURL;

  return `${baseURL}?api_key=${apiKey}`;
};

/**
 * Create URL for fetching GIF details
 *
 * @author Miroslav
 * @param {string} id
 * @param {number} indexOfKey
 * @return {string}
 */
const URLDetailsBuilder = (id, indexOfKey = keyIndex) => {
  const apiKey = APIData.keys[indexOfKey];
  const baseURL = APIData.baseURL;
  return `${baseURL}${id}?api_key=${apiKey}`;
};

//  PUBLIC INTERFACES

/**
 * Public interface for fetching data from the server
 *
 * @author Deyan
 * @async
 * @param {string} endpoint API Endpoint
 * @param {string} [query] API Query i.e. search (optional)
 * @param {string} [rating] Rating (optional)
 * @param {number} [limit] Number of GIFs returned (optional)
 * @param {number} [indexOfKey] Track which key needs to be used (optional)
 * @return {Promise<object>}
 */
export async function fetchObjectFromServer(
  endpoint,
  query,
  rating,
  limit,
  indexOfKey = keyIndex,
) {
  const url = URLBuilderGET(endpoint, query, rating, limit, indexOfKey);

  return await fetch(url).then(async (res) => {
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

/**
 * Fetch object details from the server
 *
 * @author Miroslav
 * @async
 * @param {string} id
 * @return {object}
 */
export async function fetchDetailsFromServer(id) {
  const url = URLDetailsBuilder(id);

  return await fetch(url).then(async (res) => {
    const data = await res.json();

    // if the limit of 100 API calls per hour is exceeded, use backup key
    if (data.meta.status === 429) {
      keyIndex++;
      return fetchDetailsFromServer(id);
    } else {
      return data;
    }
  });
}

/**
 * A function that makes a POST request to upload a GIF to a GIPHY server
 * Will always start with the last key and the limit is 5 uploads per day so it doesn't need to be loaded dynamically
 *
 * @author Deyan
 * @async
 */
export async function uploadGIFToServer() {
  const apiKey = APIData.keys[3];
  const uploadURL = URLBuilderPOST(3);
  const fileInput = q(GIF_INPUT_SELECTOR);
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a file.');
    return;
  }

  const formData = new FormData();
  formData.append('api_key', apiKey);
  formData.append('file', file);

  try {
    const response = await fetch(uploadURL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Failed to upload GIF: ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log('Upload successful:', responseData);

    alert('Upload successful! GIF ID: ' + responseData.data.id);

    const gifIdValue =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_GIF_ID)) || [];
    gifIdValue.push(responseData.data.id);
    localStorage.setItem(LOCAL_STORAGE_GIF_ID, JSON.stringify(gifIdValue));
  } catch (error) {
    console.error('Error uploading GIF:', error);
    alert('Error uploading GIF. Please try again.');
  }
}
