/**
 * The upload gif page view
 *
 * @author Deyan
 * @return {string} The html content for upload gif page
 */
export const toUploadView = () => `
<form id="upload-form">
  <input type="file" accept="image/gif" id="gif-input">
  <button type="submit" class="gif-upload-btn">Upload ⬆️</button>
</form>
<img src="./src/img/green.webp" alt="hi" class="content-image-u"/>
`;
