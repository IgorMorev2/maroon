const catalogFilter = document.querySelector('.catalog-filter');

if (catalogFilter) {
  const buttonOpen = document.querySelector('.catalog-filter__button-open-popup');
  const buttonClose = document.querySelector('.catalog-filter__button-close-popup');
  const filter = document.querySelector('.catalog-filter__filter');

  const openFilter = () => {
    buttonOpen.style.display = 'none';
    buttonClose.style.display = 'block';
    buttonClose.focus();
    filter.style.display = 'block';

    buttonClose.addEventListener('click', closeFilter, {once: true});
  }

  const closeFilter = () => {
    buttonClose.style.display = 'none';
    buttonOpen.style.display = 'block';
    buttonOpen.focus();
    filter.style.display = 'none';

    buttonOpen.addEventListener('click', openFilter, {once: true});
  }

  buttonOpen.addEventListener('click', openFilter, {once: true});
}
