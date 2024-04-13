import { CardComponent } from '../components/card.js';
import CardContainer from '../components/card-container.js';

export const toTrendingView = async (gifs) => {
  const container = new CardContainer();

  gifs.data.forEach(gif => {
    const img = gif.images.original.url;
    const username = gif.username;

    const card = CardComponent(img, username);

    container.addCard(card);
  });

  container.render('Trending GIFs');
};
