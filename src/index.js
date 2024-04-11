import { fetchObjectFromServer } from "./api/api-access.js";
import { loadPage } from "./events/navigation-events.js";
import { renderSearchItems } from "./events/search-events.js";
import { HOME } from "./common/constants.js";
import { q } from "./events/helpers.js";
import { toSearchView } from "./views/search-view.js";

document.addEventListener("DOMContentLoaded", () => {
  q('input#search').value = '';
  
  //add global event listener
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute("data-page"));
    }
  });

  // fetchObjectFromServer("random")
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));

  //  Search on "Enter" key press
  q('input#search').addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      renderSearchItems(event.target.value);
    }
  });

  loadPage(HOME);
});