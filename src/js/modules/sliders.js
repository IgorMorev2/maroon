import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

if (document.querySelector('.bestseller-slider')) {
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
}

if (document.querySelector('.recommendation-slider')) {
  const recommendationSlider = new Swiper('.recommendation-slider', {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
      nextEl: '.navigation-products-list__button--next',
      prevEl: '.navigation-products-list__button--prev',
    },
    pagination: {
      el: '.navigation-products-list__pagination',
      type: 'fraction',
      renderFraction: (currentClass, totalClass) => {
        return `<span class="${currentClass}"></span>` +
          `<span class="${totalClass}"></span>`;
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
        slidesPerGroup: 2,
      },
      1366: {
        slidesPerView: 'auto',
        grid: {
          rows: 1,
        },
        slidesPerGroup: 1,
      },
    }
  });
}

