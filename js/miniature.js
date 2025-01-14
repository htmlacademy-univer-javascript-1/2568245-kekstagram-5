const miniatureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createMiniature = ({ id, comments, description, likes, url }) => {
  const miniature = miniatureTemplate.cloneNode(true);

  miniature.dataset.id = id;
  miniature.querySelector('.picture__img').src = url;
  miniature.querySelector('.picture__img').alt = description;
  miniature.querySelector('.picture__comments').textContent = comments.length;
  miniature.querySelector('.picture__likes').textContent = likes;

  return miniature;
};

const renderMiniatures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const miniature = createMiniature(picture);
    fragment.append(miniature);
  });
  container.append(fragment);
};

export { renderMiniatures };
