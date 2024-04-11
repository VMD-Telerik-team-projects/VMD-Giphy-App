/**
 * The upload gif page view
 * @returns {string} The html content for upload gif page
 */
export const toUploadView = () => `
    <form id="upload-form">
    <input type="file" accept="image/gif" id="gif-input">
    <button type="submit" class="gif-upload-btn">Upload</button>
    </form>
`;
