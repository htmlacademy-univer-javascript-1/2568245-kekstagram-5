import { showBigPicture } from './big-picture.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPicture = (post) => {
  const newPicture = pictureTemplate.cloneNode(true);

  newPicture.querySelector('.picture__img').src = post.url;
  newPicture.querySelector('.picture__img').alt = post.description;
  newPicture.querySelector('.picture__likes').textContent = post.likes;
  newPicture.querySelector('.picture__comments').textContent = post.comments.length;

  newPicture.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPicture(post);
  });

  return newPicture;
};

const renderPictures = (data) => {
  const fragment = document.createDocumentFragment();

  data.forEach((post) => {
    fragment.appendChild(renderPicture(post));
  });

  pictureList.appendChild(fragment);
};

export { renderPictures };
