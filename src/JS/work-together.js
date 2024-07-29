import axios from 'axios';

const URL = 'https://portfolio-js.b.goit.study/api';
axios.defaults.baseURL = URL;

export async function makePost(user) {
  const { data, status, statusText } = await axios.post('/requests', user);
  return { data, status, statusText };
}


const refs = {
    form: document.querySelector('.js-footer-form'),
    spinner: document.querySelector('.js-loader-footer'),
    btnFooter: document.querySelector('.js-btn-footer'),
  };

function hideSpinner() {
  refs.spinner.classList.add('is-hidden');
  refs.btnFooter.classList.remove('is-hidden');
}

function showSpinner() {
  refs.spinner.classList.remove('is-hidden');
  refs.btnFooter.classList.add('is-hidden');
}

export { hideSpinner, showSpinner };

import {
  addInlineInfoNotifyStyle,
  emptyNofify,
  errorNotify,
  infoNotify,
} from './foot.bac.styls';

export function handlerPost(evt) {
  evt.preventDefault();

  const { emailContact, comment } = evt.target.elements;
  const emailValue = emailContact.value.trim();
  const commentValue = comment.value.trim();

  if (!commentValue) {
    emptyNofify();
    return;
  }

  showSpinner();

  makePost({ email: emailValue, comment: commentValue })
    .then(() => {
      infoNotify();
      addInlineInfoNotifyStyle();

      evt.target.reset();
    })
    .catch(() => {
      errorNotify();
      return;
    })
    .finally(() => {
      hideSpinner();
    });
}

refs.form.addEventListener('submit', handlerPost);

refs.spinner.classList.add('is-hidden');
