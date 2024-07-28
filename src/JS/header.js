const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const openMenuTablet = document.querySelector('.menu-header');
const listMenu = document.querySelector('#menu-list');

openMenuTablet.addEventListener('click', () => {
  if (listMenu.classList.contains('hide')) {
    listMenu.classList.remove('hide');
    listMenu.classList.add('show');
  } else {
    listMenu.classList.remove('show');
    listMenu.classList.add('hide');
  }
});
