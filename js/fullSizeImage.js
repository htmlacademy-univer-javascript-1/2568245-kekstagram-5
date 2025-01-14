/* eslint-disable no-use-before-define */
const bigPictureElement = document.querySelector('.big-picture');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');
const body = document.body;
const commentsContainer = bigPictureElement.querySelector('.social__comments');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const captionElement = bigPictureElement.querySelector('.social__caption');

const openBigPicture = ({ url, likes, comments, description }) => {
  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPictureElement.querySelector('.big-picture__img img').src = url;
  likesCountElement.textContent = likes;
  commentsCountElement.textContent = comments.length;
  captionElement.textContent = description;

  commentsContainer.innerHTML = '';
  comments.forEach(({ avatar, name, message }) => {
    const commentElement = document.createElement('li');
    commentElement.className = 'social__comment';
    commentElement.innerHTML = `
            <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
            <p class="social__text">${message}</p>
        `;
    commentsContainer.appendChild(commentElement);
  });

  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');

  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onEscKeyPress);
};

const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyPress);
};

const onEscKeyPress = (event) => {
  if (event.key === 'Escape') {
    closeBigPicture();
  }
};

export { openBigPicture };
