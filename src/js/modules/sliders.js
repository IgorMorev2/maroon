import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const bestsellerSwiper = new Swiper('.slider', {
  modules: [Navigation],
  direction: 'horizontal',
  spaceBetween: 30,
  slidesPerView: 'auto',
  grabCursor: true,
  centeredSlides: true,
  speed: 500,
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
  breakpoints: {
    768: {
      centeredSlides: false,
    }
  }
});

