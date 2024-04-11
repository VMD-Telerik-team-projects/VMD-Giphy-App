// import { fetchObjectFromServer } from "../api-access.js";
import { loadPage } from "./events/navigation-events.js";
import { HOME } from "./common/constants.js";
import { uploadGifFn } from "./events/upload-events.js";
import { q } from "./events/helpers.js";

//  TODO: Change any constants that point to the "constants" folder (now deleted). Redirect to "common/constants.js"

document.addEventListener("DOMContentLoaded", () => {
  //add global event listener
  document.addEventListener("click", (event) => {
    //nav events
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute("data-page"));
    }
  });
  q("upload-form").addEventListener("submit", (event) => {
    //upload button event
    event.preventDefault();
    uploadGifFn(q("upload-form"));
  });

  // fetchObjectFromServer("random")
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));

  loadPage(HOME);
});
