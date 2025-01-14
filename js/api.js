import { closeMessage, showServerErrorMessage, showUploadErrorMessage, showUploadSuccessMessage } from './info-messages.js';

const getData = (renderPictures) => {
  fetch('https://29.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      closeMessage();
      return response.json();
    })
    .then((data) => renderPictures(data))
    .catch(() => showServerErrorMessage());
};

const sendData = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  fetch(
    'https://29.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        showUploadSuccessMessage();
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      showUploadErrorMessage();
    });
};

export { getData, sendData };
