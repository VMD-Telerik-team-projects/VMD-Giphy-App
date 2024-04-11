import { fetchObjectFromServer } from "./api/api-access.js";
import { loadPage } from "./events/navigation-events.js";
import { HOME } from "./common/constants.js";

document.addEventListener("DOMContentLoaded", () => {
  //add global event listener
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute("data-page"));
    }
  });

  // fetchObjectFromServer("random")
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));

  loadPage(HOME);
});
