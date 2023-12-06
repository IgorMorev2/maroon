import Swiper from 'swiper';
import { Navigation, Pagination} from 'swiper/modules';

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
    nextEl: '.navigation-products-list__button--next',
    prevEl: '.navigation-products-list__button--prev',
  },
  breakpoints: {
    768: {
      centeredSlides: false,
    }
  }
});

const recommendationsSlider = new Swiper('.products-slider', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 50,
  speed: 500,
  navigation: {
    nextEl: '.navigation-products-list__button--next',
    prevEl: '.navigation-products-list__button--prev',
  },
  pagination: {
    el: ".navigation-products-list__pagination",
    type: "fraction",
  },
});

