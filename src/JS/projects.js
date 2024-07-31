import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next.projects-btn',
    prevEl: '.swiper-button-prev.projects-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  on: {
    init: function () {
      updateNavigationButtons(this);
    },
    slideChange: function () {
      updateNavigationButtons(this);
    },
  },
});
