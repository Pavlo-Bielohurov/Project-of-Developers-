document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.swiper-slide-skills');
  const nextButton = document.querySelector('.swiper-button-next');
  const swiperWrapper = document.querySelector('.swiper-wrapper-skills');
  let currentIndex = 0;

  function updateSwiper() {
    const width = window.innerWidth;
    let visibleSlides;

    if (width <= 375) {
      visibleSlides = 2;
    } else if (width <= 768) {
      visibleSlides = 3;
    } else if (width >= 1440) {
      visibleSlides = slides.length;
    } else {
      visibleSlides = slides.length;
    }

    const slideWidth = slides[0].clientWidth + 20; // slide width + margin
    const offset = -currentIndex * slideWidth;
    swiperWrapper.style.transform = `translateX(${offset}px)`;
  }

  nextButton.addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
    updateSwiper();
  });

  window.addEventListener('resize', updateSwiper);
  updateSwiper();
});
