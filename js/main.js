import { createTemporaryData } from './data';
import { renderMiniatures } from './miniature';
import { openBigPicture } from './fullSizeImage.js';
const photos = createTemporaryData();

renderMiniatures(createTemporaryData());

document.querySelector('.pictures').addEventListener('click', (event) => {
  const miniature = event.target.closest('.picture');
  if (miniature) {
    const pictureId = Number(miniature.dataset.id);
    const pictureData = photos.find((picture) => picture.id === pictureId);
    openBigPicture(pictureData);
  }
});
