import { fetchDetailsFromServer } from "../api/api-access.js";
import { CONTAINER_SELECTOR } from "../common/constants.js";
import { gifDetailsView } from "../views/gif-details-view.js";
import { q } from "./helpers.js";

export const renderGifDetails = async (gifId = null) => {
  const gifDetails = await fetchDetailsFromServer(gifId);
  console.log(gifDetails);
  q(CONTAINER_SELECTOR).innerHTML = await gifDetailsView(gifDetails);
};
