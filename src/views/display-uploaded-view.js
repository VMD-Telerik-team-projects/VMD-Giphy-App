import { CardComponent } from '../components/card.js';
import CardContainer from '../components/card-container.js';

/**
 * Display the uploaded GIFs.
 *
 * @author Miroslav
 * @param {object} gifs Uploaded GIFs
 */
export const toUploadedView = async (gifs) => {
  const container = new CardContainer();

  gifs.data.forEach((gif) => {
    const img = gif.images.original.url;
    const username = gif.username;
    const id = gif.id;

    const card = CardComponent(img, username, id);

    container.addCard(card);
  });

  container.render('Uploaded GIFs');
};

/**
 * Display default message if no GIFs are uploaded.
 *
 * @author Miroslav
 */
export const toNotUploadedView = () => {
  const container = new CardContainer();
  container.render('No gifs uploaded yet');
};
