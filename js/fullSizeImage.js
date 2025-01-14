/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const bigPictureElement = document.querySelector('.big-picture');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');
const body = document.body;
const commentsContainer = bigPictureElement.querySelector('.social__comments');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const captionElement = bigPictureElement.querySelector('.social__caption');
const commentsLoader = bigPictureElement.querySelector('.comments-loader');
const commentCountDisplay = bigPictureElement.querySelector('.social__comment-count');

let currentCommentsIndex = 0;
const LOAD_STEP = 5;
let allComments = [];

const openBigPicture = ({ url, likes, comments, description }) => {
  allComments = comments;
  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPictureElement.querySelector('.big-picture__img img').src = url;
  likesCountElement.textContent = likes;
  commentsCountElement.textContent = comments.length;
  captionElement.textContent = description;

  commentsContainer.innerHTML = '';
  currentCommentsIndex = 0;

  document.querySelector('.social__comment-count').classList.remove('hidden');
  document.querySelector('.comments-loader').classList.remove('hidden');

  loadComments(allComments);

  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onEscKeyPress);
};

commentsLoader.addEventListener('click', () => {
  loadComments(allComments);
});

const loadComments = (comments) => {
  const commentsToLoad = comments.slice(currentCommentsIndex, currentCommentsIndex + LOAD_STEP);

  commentsToLoad.forEach(({ avatar, name, message }) => {
    const commentElement = document.createElement('li');
    commentElement.className = 'social__comment';
    commentElement.innerHTML = `
            <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
            <p class="social__text">${message}</p>
    `;
    commentsContainer.appendChild(commentElement);
  });


  currentCommentsIndex += commentsToLoad.length;

  commentCountDisplay.textContent = `${Math.min(currentCommentsIndex, comments.length)} из ${comments.length} комментариев`;

  if (currentCommentsIndex >= comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

commentsLoader.addEventListener('click', () => {
  loadComments(comments);
});

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
