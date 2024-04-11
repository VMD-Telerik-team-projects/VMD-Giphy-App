/**
 * The upload gif page view
 * @returns {string} The html content for upload gif page
 */
export const toUploadView = () => `
    <form class="upload-form">
    <input type="file" accept="image/gif" id="gif-input">
    <button class="gif-upload-btn">Upload</button>
    </form>
`;
