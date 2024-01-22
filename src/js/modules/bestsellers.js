import { products } from "./get-data.js";

let bestsellers = [...products];

function compareRating(a, b) {
  if (a.rating > b.rating) return 1;
  if (a.rating == b.rating) return 0;
  if (a.rating < b.rating) return -1;
}
bestsellers = bestsellers.sort(compareRating).slice(0, 12);

const bestsellersContainer = document.querySelector('.bestseller-slider__list');

if (bestsellersContainer) {
  const templateBestseller = document.querySelector('#bestseller-card');

  bestsellers.forEach((bestseller) => {
    const bestsellerCard = templateBestseller.content.cloneNode(true);
    const bestsellerImage = bestsellerCard.querySelector('.bestseller-card__img');
    const bestsellerTitle = bestsellerCard.querySelector('.bestseller-card__title');
    const bestsellerSubtitle = bestsellerCard.querySelector('.bestseller-card__subtitle');

    bestsellerImage.src = `./img/catalog-data/${bestseller.image}`;
    bestsellerImage.srcset = `./img/catalog-data/${bestseller.name.toLowerCase()}@2x.jpg`;
    bestsellerImage.alt = bestseller.name;

    bestsellerTitle.textContent = bestseller.name;
    bestsellerSubtitle.textContent = bestseller.subtitle;

    const bestsellerItem = document.createElement('li');
    bestsellerItem.classList.add('bestseller-slider__item');
    bestsellerItem.classList.add('swiper-slide');

    bestsellerItem.append(bestsellerCard);
    bestsellersContainer.append(bestsellerItem);
  });
}
