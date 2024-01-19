import { products } from "./get-data.js"
import { filter, filterProducts } from "./catalog-filter.js"

const productsList = document.querySelector('.products-list__list');

let currentPage = 1;
const productsPerPage = 8;
let currentProducts = products;

const updatePagination = (currentPage, products) => {
  paginationTotal.textContent = String(Math.ceil(products.length / productsPerPage));
  paginationCurrent.textContent = String(currentPage);
};


const productsListNavigation = document.querySelector('.products-list__navigation');

const paginationCurrent = productsListNavigation.querySelector('.navigation-products-list__pagination-current');
const paginationTotal = productsListNavigation.querySelector('.navigation-products-list__pagination-total');
const paginationButtonPrev = productsListNavigation.querySelector('.navigation-products-list__button--prev');
const paginationButtonNext = productsListNavigation.querySelector('.navigation-products-list__button--next');

paginationButtonNext.addEventListener('click', () => {
  if (+paginationCurrent.textContent !== +paginationTotal.textContent) {
    currentPage++;
    paginationCurrent.textContent = String(currentPage);

    loadPage(currentPage, currentProducts);

    if (+paginationCurrent.textContent === +paginationTotal.textContent) {
      paginationButtonNext.disabled = true;
    }
  }

  if (paginationButtonPrev.disabled) {
    paginationButtonPrev.disabled = false;
  }
});

paginationButtonPrev.addEventListener('click', () => {
  if (+paginationCurrent.textContent !== 1) {
    currentPage--;
    paginationCurrent.textContent = String(currentPage);

    loadPage(currentPage, currentProducts);

    if (+paginationCurrent.textContent === 1) {
      paginationButtonPrev.disabled = true;
    }
  }

  if (paginationButtonNext.disabled) {
    paginationButtonNext.disabled = false;
  }
});

//Загрузка товаров на страницу
const displayProducts = (products) => {
  productsList.innerHTML = '';
  const templateCatalogCard = document.querySelector('#catalog-card');

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
    cardSubtitle.textContent = product.subtitle;
    cardVolume.textContent = product.volume[0];

    const productsItem = document.createElement('li');
    productsItem.classList.add('products-list__item');

    productsItem.append(catalogCard);
    productsList.append(productsItem);
  });
}

const loadPage = (currentPage, products) => {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = products.slice(startIndex, endIndex);

  paginationButtonPrev.disabled = true;
  paginationButtonNext.disabled = false;

  if (products.length <= productsPerPage) {
    productsListNavigation.style.display = 'none';
  } else {
    updatePagination(currentPage, products);
  }

  displayProducts(productsToShow);
}

loadPage(currentPage, currentProducts);

//Отработка фильтра
filter.addEventListener('submit', (evt) => {
  evt.preventDefault();

  currentPage = 1;
  currentProducts = filterProducts;
  // updatePagination(currentPage, currentProducts);

  loadPage(currentPage, currentProducts);
});

filter.addEventListener('reset', () => {
  currentPage = 1;
  currentProducts = products;
  // updatePagination(currentPage, currentProducts);

  loadPage(currentPage, currentProducts);
});
