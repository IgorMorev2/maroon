import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const bestsellerSlider = new Swiper('.bestseller-slider', {
  modules: [Navigation],
  direction: 'horizontal',
  spaceBetween: 30,
  slidesPerView: 'auto',
  grabCursor: true,
  centeredSlides: true,
  speed: 500,
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

// const mainProductsSlider = new Swiper('.products-slider', {
//   modules: [Navigation],
//   direction: 'horizontal',
//   spaceBetween: 30,
//   slidesPerView: 'auto',
//   grabCursor: true,
//   centeredSlides: true,
//   speed: 500,
//   navigation: {
//     nextEl: '.slider__button--next',
//     prevEl: '.slider__button--prev',
//   },
//   breakpoints: {
//     768: {
//       centeredSlides: false,
//     }
//   }
// });

