import axios from 'axios';

const URL = 'https://portfolio-js.b.goit.study/api';
axios.defaults.baseURL = URL;

export async function makePost(user) {
  const { data, status, statusText } = await axios.post('/requests', user);
  return { data, status, statusText };
}









/*import { makePost } from './swagger-api';*/
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
    .finally(() => {});
}



export const refs = {
    form: document.querySelector('.js-footer-form'),
  };
