import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


new Accordion('.about-section', {

  duration: 400,
  showMultiple: true,
});


document.querySelectorAll('.ac-trigger').forEach(item => {
    item.addEventListener('click', event => {
        const aboutButton = event.currentTarget;
        const aboutSvg = aboutButton.querySelector('.svg-about');

        // Проверяем, существует ли уже новый иконка
        if (aboutSvg.innerHTML.includes('icon-to-down')) {
            // Меняем обратно на исходную иконку
            aboutSvg.innerHTML = '<use href="../Images/symbol-defs.svg#icon-to-up"></use>';
        } else {
            // Меняем на новую иконку
            aboutSvg.innerHTML = '<use href="../Images/symbol-defs.svg#icon-to-down"></use>';
        }
    });
});

