document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.swiper-slide');
  const nextButton = document.querySelector('.swiper-button-next');
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  let currentIndex = 0;
  let visibleSlides = 3;

  function updateVisibleSlides() {
    const width = window.innerWidth;
    if (width <= 375) {
      visibleSlides = 2;
    } else if (width <= 768) {
      visibleSlides = 3;
    } else {
      visibleSlides = slides.length;
    }
  }

  function updateSwiper() {
    const offset = -currentIndex * (swiperWrapper.clientWidth / visibleSlides);
    swiperWrapper.style.transform = `translateX(${offset}px)`;
  }

  nextButton.addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
    updateSwiper();
  });

  window.addEventListener('resize', () => {
    updateVisibleSlides();
    updateSwiper();
  });

  updateVisibleSlides();
  updateSwiper();
});
