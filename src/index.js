// import { fetchObjectFromServer } from "../api-access.js";
import { loadPage } from "./events/navigation-events.js";
import { renderSearchItems } from "./events/search-events.js";
import { HOME } from "./common/constants.js";
// import { uploadGifFn } from "./events/upload-events.js";
import { q } from "./events/helpers.js";

//  TODO: Change any constants that point to the "constants" folder (now deleted). Redirect to "common/constants.js"
// import { q } from "./events/helpers.js";
// import { toSearchView } from "./views/search-view.js";

document.addEventListener("DOMContentLoaded", () => {
  q("input#search").value = "";

  //add global event listener
  document.addEventListener("click", (event) => {
    //nav events
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute("data-page"));
    }
  });

  // fetchObjectFromServer("random")
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));

  //  Search on "Enter" key press
  q("input#search").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      console.log(event.key);
      event.preventDefault();
      renderSearchItems(event.target.value);
    }
  });

  q("#upload-form").addEventListener("submit", (event) => {
    //upload button event
    event.preventDefault();

    // const userFile = q("#gif-input").files[0];
    const file = formData.get("file");
    const formData = new FormData();

    const apiKey = "gMqqK49H6lYoTzL24Sr4YCSMaFdAtO9V";
    // formData.append("user-file", userFile);
    formDataWithApiKey.append("file", file);
    formDataWithApiKey.append("api_key", apiKey);

    fetch(`upload.giphy.com/v1/gifs/?api_key=${apiKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });

  loadPage(HOME);
});
