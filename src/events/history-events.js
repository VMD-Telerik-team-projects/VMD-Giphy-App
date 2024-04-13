import { fetchObjectFromServer } from "../api/api-access.js";
import { HISTORY } from "../common/constants.js";
import {
  toNotUploadedView,
  toUploadedView,
} from "../views/display-uploaded-view.js";

export async function renderUploadedGifs() {
  const gifIdKey = JSON.parse(localStorage.getItem("gifId"));
  if (gifIdKey !== null) {
    const uploadedGifIds = gifIdKey.join(",");
    const history = await fetchObjectFromServer(HISTORY, uploadedGifIds);
    await toUploadedView(history);
  } else {
    await toNotUploadedView();
  }
}
