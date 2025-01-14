import { isEscapeKey } from './util.js';
import { closeEditor, showEditor } from './form.js';

const serverErrorTemplate = document.querySelector('#server_error').content.querySelector('.server_error');
const uploadErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const uploadSuccessTemplate = document.querySelector('#success').content.querySelector('.success');


const closeMessage = () => {
  document.body.removeChild(document.body.lastChild);
};

const onErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
    showEditor();
  }
};

const onErrorCloseClick = () => {
  closeMessage();
  showEditor();
};

const onSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const onSuccessCloseClick = () => {
  closeMessage();
};

const showServerErrorMessage = () => {
  const newMessage = serverErrorTemplate.cloneNode(true);
  document.body.insertAdjacentElement('beforeend', newMessage);
};

const showUploadErrorMessage = () => {
  const newMessage = uploadErrorTemplate.cloneNode(true);
  const messageInner = newMessage.querySelector('.error__inner');
  const closeButton = newMessage.querySelector('.error__button');

  closeEditor(false);

  messageInner.addEventListener('click', (evt) => evt.stopPropagation());
  newMessage.addEventListener('click', onErrorCloseClick);
  closeButton.addEventListener('click', onErrorCloseClick);
  document.addEventListener('keydown', onErrorEscKeydown);

  document.body.insertAdjacentElement('beforeend', newMessage);
};

const showUploadSuccessMessage = () => {
  const newMessage = uploadSuccessTemplate.cloneNode(true);
  const messageInner = newMessage.querySelector('.success__inner');
  const closeButton = newMessage.querySelector('.success__button');

  closeEditor();

  messageInner.addEventListener('click', (evt) => evt.stopPropagation());
  newMessage.addEventListener('click', onSuccessCloseClick);
  closeButton.addEventListener('click', onSuccessCloseClick);
  document.addEventListener('keydown', onSuccessEscKeydown);

  document.body.insertAdjacentElement('beforeend', newMessage);
};

export {
  showServerErrorMessage,
  closeMessage,
  showUploadErrorMessage,
  showUploadSuccessMessage
};
