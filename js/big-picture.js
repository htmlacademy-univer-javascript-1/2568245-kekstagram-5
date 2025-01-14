import { isEscapeKey } from './util.js';

const COMMENTS_UPLOAD_AMOUNT = 5;

const bigPicture = document.querySelector('.big-picture');
const pictureCloseButton = bigPicture.querySelector('#picture-cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img').children[0];
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const pictureCaption = document.querySelector('.social__caption');
const commentsList = bigPicture.querySelector('.social__comments');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

let commentsAmount = COMMENTS_UPLOAD_AMOUNT;
let allComments = [];

const renderComment = (comment) => {
  const newComment = document.createElement('li');
  const commentAvatar = document.createElement('img');
  const commentText = document.createElement('p');

  newComment.classList.add('social__comment');
  commentAvatar.classList.add('social__picture');
  commentText.classList.add('social__text');

  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentAvatar.width = '35';
  commentAvatar.height = '35';
  commentText.textContent = comment.message;

  newComment.appendChild(commentAvatar);
  newComment.appendChild(commentText);

  return newComment;
};

const renderComments = () => {
  const commentsFragment = document.createDocumentFragment();

  if (allComments.length < COMMENTS_UPLOAD_AMOUNT || commentsAmount >= allComments.length) {
    commentsAmount = allComments.length;
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  socialCommentCount.textContent = `${commentsAmount} из ${allComments.length} комментариев`;

  const startIndex = (commentsAmount <= COMMENTS_UPLOAD_AMOUNT)
    ? 0
    : COMMENTS_UPLOAD_AMOUNT * Math.floor((commentsAmount - 1) / COMMENTS_UPLOAD_AMOUNT);

  for (let i = startIndex; i < commentsAmount; i++) {
    commentsFragment.appendChild(renderComment(allComments[i]));
  }

  commentsList.appendChild(commentsFragment);
};

const renderContent = (post) => {
  const { url, likes, comments, description } = post;

  bigPictureImage.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  pictureCaption.textContent = description;

  commentsList.innerHTML = '';
  renderComments();
};

const onCommentsLoaderClick = () => {
  commentsAmount += COMMENTS_UPLOAD_AMOUNT;
  renderComments();
};

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
};

const onPictureCloseClick = () => {
  hideBigPicture();
};

function hideBigPicture () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  pictureCloseButton.removeEventListener('click', onPictureCloseClick);
  document.removeEventListener('keydown', onDocumentEscKeydown);
}

function showBigPicture (post) {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  commentsAmount = COMMENTS_UPLOAD_AMOUNT;
  allComments = post.comments;
  renderContent(post);

  commentsLoader.addEventListener('click', onCommentsLoaderClick);
  pictureCloseButton.addEventListener('click', onPictureCloseClick);
  document.addEventListener('keydown', onDocumentEscKeydown);
}


export { showBigPicture };
