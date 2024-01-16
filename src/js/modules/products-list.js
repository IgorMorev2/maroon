import { products } from "./get-data.js"

const productsList = document.querySelector('.products-list__list');

if (productsList) {
  let currentPage = 1;
  const productsPerPage = 4;

  const productsListNavigation = document.querySelector('.products-list__navigation');

  //Навигация
  if (products.length <= productsPerPage) {
    productsListNavigation.style.display = 'none';
  } else {
    const paginationCurrent = productsListNavigation.querySelector('.navigation-products-list__pagination-current');
    const paginationTotal = productsListNavigation.querySelector('.navigation-products-list__pagination-total');
    const paginationButtonPrev = productsListNavigation.querySelector('.navigation-products-list__button--prev');
    const paginationButtonNext = productsListNavigation.querySelector('.navigation-products-list__button--next');

    paginationTotal.textContent = String(Math.ceil(products.length / productsPerPage));

    paginationButtonNext.addEventListener('click', () => {
      if (+paginationCurrent.textContent !== +paginationTotal.textContent) {
        currentPage++;
        paginationCurrent.textContent = String(currentPage);

        loadPage(currentPage);
      } else {
        paginationButtonNext.disabled = true;
      }

      if (paginationButtonPrev.disabled) {
        paginationButtonPrev.disabled = false;
      }
    });

    paginationButtonPrev.addEventListener('click', () => {
      if (+paginationCurrent.textContent !== 1) {
        currentPage--;
        paginationCurrent.textContent = String(currentPage);

        loadPage(currentPage);
      } else {
        paginationButtonPrev.disabled = true;
      }

      if (paginationButtonNext.disabled) {
        paginationButtonNext.disabled = false;
      }
    });
  }

  const templateCatalogCard = document.querySelector('#catalog-card');

  const displayProducts = (products) => {
    productsList.innerHTML = '';

    products.forEach((product) => {
      const catalogCard = templateCatalogCard.content.cloneNode(true);
      const cardImage = catalogCard.querySelector('.catalog-card__img');
      const cardTitle = catalogCard.querySelector('.catalog-card__title');
      const cardPrice = catalogCard.querySelector('.catalog-card__price');
      const cardSubtitle = catalogCard.querySelector('.catalog-card__subtitle');
      const cardVolume = catalogCard.querySelector('.catalog-card__volume');

      cardImage.src = `./img/catalog-data/${product.image}`;
      cardImage.alt = product.name;

      cardTitle.textContent = product.name;
      cardPrice.textContent = product.price;
      cardSubtitle.textContent = product.subcategory;
      cardVolume.textContent = product.volume[0];

      const productsItem = document.createElement('li');
      productsItem.classList.add('products-list__item');

      productsItem.append(catalogCard);
      productsList.append(productsItem);
    });
  }

  const loadPage = (page) => {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = products.slice(startIndex, endIndex);
    displayProducts(productsToShow);
  }

  loadPage(currentPage);
}




/* <template id="catalog-card">
  <a class="catalog-card">
    <img class="catalog-card__img" src="" srcset="" alt="">
    <h3 class="catalog-card__title"></h3>
    <span class="catalog-card__price"></span>
    <span class="catalog-card__subtitle"></span>
    <span class="catalog-card__volume"></span>
  </a>
</template> */

// {
//   "name": "High",
//   "image": "high.jpg",
//   "description": "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей. Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
//   "price": 199,
//   "rating": 3,
//   "category": "Уход для лица",
//   "subcategory": "Крем для лица",
//   "skin": "Нормальная",
//   "ingredients": [
//     "Aqua",
//     "Cyclomethicone",
//     "Dicaprylyl Carbonate",
//     "Butylene Glycol",
//     "Glycerin",
//     "Tapioca Starch",
//     "Nelumbium Speciosum Flower Extract",
//     "Calendula Officinalis Flower Extract",
//     "Propylene Glycol",
//     "Tocopherol",
//     "Glycine Soja Oil",
//     "Dimethiconol",
//     "Citronellol",
//     "Limonene"
//   ],
//   "volume": [
//     "30ml",
//     "50ml",
//     "75ml"
//   ]
// },
