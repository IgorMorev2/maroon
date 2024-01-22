import { products } from "./get-data.js";
import { isValidateForm } from "./util.js";


const catalogFilter = document.querySelector('.catalog-filter');
const filter = document.querySelector('.catalog-filter__filter');
const errorText = document.querySelector('.catalog-filter__error-text');
// console.log(filter)

// Открытие и закрытие окна фильтра
const buttonOpen = document.querySelector('.catalog-filter__button-open-popup');
const buttonClose = document.querySelector('.catalog-filter__button-close-popup');

const openFilter = () => {
  buttonOpen.style.display = 'none';
  buttonClose.style.display = 'block';
  buttonClose.focus();
  filter.style.display = 'block';
  errorText.style.display = 'none';

  buttonOpen.removeEventListener('click', openFilter);

  buttonClose.addEventListener('click', closeFilter);
}

const closeFilter = () => {
  buttonClose.style.display = 'none';
  buttonOpen.style.display = 'block';
  buttonOpen.focus();
  filter.style.display = 'none';

  buttonClose.removeEventListener('click', closeFilter);

  buttonOpen.addEventListener('click', openFilter);
}

if (buttonOpen) {
  buttonOpen.addEventListener('click', openFilter);
}

const productsWithoutRepeats = new Set();
let filterProducts = [];

//Реализация фильтрования

const submitFilterForm = (evt) => {
  evt.preventDefault();

  const dataForm = new FormData(filter);

  if (!isValidateForm(filter)) {
    productsWithoutRepeats.clear();

    for (let [key, value] of dataForm) {
      products.forEach((product) => {
        const skinTypeCondition = (key === 'skin-type' && value === product['skin-type']);
        const categoryCondition = (key === product.category && value === product.subcategory);

        if (skinTypeCondition || categoryCondition) {
          productsWithoutRepeats.add(product);
        }
      });
    }

    filterProducts = [...productsWithoutRepeats];
    closeFilter();
  } else {
    errorText.style.display = 'block';
  }

};

//Реализация сброса значений формы
const resetFilterForm = () => {
  productsWithoutRepeats.clear();

  products.forEach((product) => {
    productsWithoutRepeats.add(product);
  })

  filterProducts = [...productsWithoutRepeats];
  closeFilter();
};

if (filter) {
  filter.addEventListener('submit', submitFilterForm);
  filter.addEventListener('reset', resetFilterForm);
}

export { filter, filterProducts };
