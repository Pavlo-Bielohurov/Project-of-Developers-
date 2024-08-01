document.addEventListener('DOMContentLoaded', () => {
  const benefitsLinkToScroll = document.querySelectorAll(
    '.benefits-link-to-scroll'
  );

  benefitsLinkToScroll.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
});
