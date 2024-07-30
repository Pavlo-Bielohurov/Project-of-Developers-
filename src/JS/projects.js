document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.projects-swiper-button-next',
      prevEl: '.projects-swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      slideChange: function () {
        const prevButton = document.querySelector(
          '.projects-swiper-button-prev'
        );
        const nextButton = document.querySelector(
          '.projects-swiper-button-next'
        );

        if (this.isBeginning) {
          prevButton.classList.add('disabled');
        } else {
          prevButton.classList.remove('disabled');
        }

        if (this.isEnd) {
          nextButton.classList.add('disabled');
        } else {
          nextButton.classList.remove('disabled');
        }
      },
    },
  });

  // Initial state check
  const prevButton = document.querySelector('.projects-swiper-button-prev');
  const nextButton = document.querySelector('.projects-swiper-button-next');

  if (swiper.isBeginning) {
    prevButton.classList.add('disabled');
  }

  if (swiper.isEnd) {
    nextButton.classList.add('disabled');
  }
});
