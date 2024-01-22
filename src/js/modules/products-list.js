import { products } from "./get-data.js";
import { filter, filterProducts } from "./catalog-filter.js";
import { isValidateForm } from "./util.js";

const productsList = document.querySelector('.products-list__list');
const emptyText = document.querySelector('.products-list__text-empty');

let currentPage = 1;
const PRODUCTS_PER_PAGE = 4;
let currentProducts = products;

const updatePagination = (currentPage, products) => {
  paginationTotal.textContent = String(Math.ceil(products.length / PRODUCTS_PER_PAGE));
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
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const productsToShow = products.slice(startIndex, endIndex);

  if (products.length <= PRODUCTS_PER_PAGE) {
    productsListNavigation.style.display = 'none';
  } else {
    productsListNavigation.style.display = 'flex';
    updatePagination(currentPage, products);
  }
  products.length === 0 ? emptyText.style.display = 'block' : emptyText.style.display = 'none';

  displayProducts(productsToShow);
}

loadPage(currentPage, currentProducts);

// Отработка фильтра
filter.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!isValidateForm(filter)) {
    currentPage = 1;
    currentProducts = filterProducts;

    loadPage(currentPage, currentProducts);
  }
});

filter.addEventListener('reset', () => {
  currentPage = 1;
  currentProducts = products;

  loadPage(currentPage, currentProducts);
});
