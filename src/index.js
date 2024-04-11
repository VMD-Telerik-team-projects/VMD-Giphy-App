// import { fetchObjectFromServer } from "../api-access.js";
import { loadPage } from "./events/navigation-events.js";
import { renderSearchItems } from "./events/search-events.js";
import { HOME } from "./common/constants.js";
import { uploadGifFn } from "./events/upload-events.js";
import { q, toBinString } from "./events/helpers.js";
import { gifDetailsView } from "./views/gif-details-view.js";
import { uploadGIFToServer } from "./api/api-access.js";

document.addEventListener("DOMContentLoaded", () => {
  q("input#search").value = "";

  //add global event listener
  document.addEventListener("click", (event) => {
    //nav events
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute("data-page"));
    }

    //  ! TEST CODE
    //  TODO: Move the array buffer/buffer string conversion someplace else
    if (event.target.classList.contains('gif-upload-btn')) {
      const file = q('#gif-input').files[0];
      const arrBuffer = file.arrayBuffer();

      console.log(file);
      
      arrBuffer
        .then(data => {
          const decoder = new TextDecoder();
          console.log(uploadGIFToServer(decoder.decode(data)));
        });
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