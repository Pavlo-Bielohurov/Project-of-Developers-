
/*const modalTrigger = document.getElementsByClassName("trigger")[0];

const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);

const bodyElementHTML = document.getElementsByTagName("body")[0];

const modalBackground = document.getElementsByClassName("foot-modal")[0];

const modalClose = document.getElementsByClassName("modal-close-btn")[0];
const modalActive = document.getElementsByClassName("modal-open")[0];

function bodyMargin() {
    bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}
bodyMargin();

modalTrigger.addEventListener("click", function () {
    // делаем модальное окно видимым
    modalBackground.style.display = "block";
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }
    modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
});

modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none";
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }
});*/


document.addEventListener('DOMContentLoaded', function() {
    var modalButtons = document.querySelectorAll('.modal-open'),
        closeButtons = document.querySelector('.modal-close-btn');
    
    
    modalButtons.forEach(function(item){
       
       item.addEventListener('click', function(e) {
          
          e.preventDefault();
          var modalId = this.getAttribute('data-modal'),
              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
          
          modalElem.classList.add('active');
          overlay.classList.add('active');
       }); // end click
    }); // end foreach
 }); // end ready

 closeButtons.forEach(function(item){
    item.addEventListener('click', function(e) {
       var parentModal = this.closest('.modal');
       parentModal.classList.remove('active');
       overlay.classList.remove('active');
    });
 });




 import axios from 'axios';

const URL = 'https:';
axios.defaults.baseURL = URL;

export async function makePost(user) {
  const { data, status, statusText } = await axios.post('/requests', user);
  return { data, status, statusText };
}