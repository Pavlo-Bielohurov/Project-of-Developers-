document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight / 2) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
