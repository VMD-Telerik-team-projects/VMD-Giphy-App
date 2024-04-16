/**
 * The upload gif page view
 *
 * @author Miroslav, Deyan
 * @return {string} The html content for upload gif page
 */
export const toUploadView = () => `
<form id="upload-form">
  <label for="gif-input">
    Select a gif to upload
    <input type="file" accept="image/gif" id="gif-input" name="gif-input">
  </label>
  <button type="submit" class="gif-upload-btn">Upload ⬆️</button>
</form>
<img src="./src/img/green.webp" alt="hi" class="content-image-u"/>
`;
