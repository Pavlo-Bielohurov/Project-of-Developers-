const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const openMenuTablet = document.querySelector('.menu-header');
const listMenu = document.querySelector('#menu-list');
const mobileMenu = document.querySelector('.menu');
const mobileMenuLinks = document.querySelectorAll('.menu-list-item a');
const orderButtons = document.querySelectorAll('.button-order-js');

openMenuTablet.addEventListener('click', () => {
  if (listMenu.classList.contains('hide')) {
    listMenu.classList.remove('hide');
    listMenu.classList.add('show');
  } else {
    listMenu.classList.remove('show');
    listMenu.classList.add('hide');
  }
});

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('show');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }

    const mobileMenu = document.querySelector('.menu');
    mobileMenu.classList.remove('show');
    listMenu.classList.remove('show');
    listMenu.classList.add('hide');
  });
});

orderButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    const targetId = button.closest('a').getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }

    mobileMenu.classList.remove('show');
  });
});
