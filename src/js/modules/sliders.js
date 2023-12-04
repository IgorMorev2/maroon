import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

const bestsellerSlider = new Swiper('.bestseller-slider', {
  modules: [Navigation],
  direction: 'horizontal',
  spaceBetween: 30,
  slidesPerView: 'auto',
  grabCursor: true,
  centeredSlides: true,
  speed: 500,
  mousewheel: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.bestseller-slider__button--next',
    prevEl: '.bestseller-slider__button--prev',
  },
  breakpoints: {
    768: {
      centeredSlides: false,
    }
  }
});

const mainProductsSlider = new Swiper('.products-slider', {
  modules: [Navigation, Pagination, Grid],
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 50,
  speed: 500,
  navigation: {
    nextEl: '.products-slider__button--next',
    prevEl: '.products-slider__button--prev',
  },
  pagination: {
    el: ".products-slider__pagination",
    type: "fraction",
  },
});

