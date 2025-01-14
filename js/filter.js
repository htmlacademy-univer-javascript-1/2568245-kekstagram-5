import { clearPictures, renderPictures } from './pictures.js';
import { debounce, getRandomArrayElementsInAmount } from './util.js';

const RANDOM_PICTURES_COUNT = 10;
const ACTIVE_CLASS = 'img-filters__button--active';

const filters = document.querySelector('.img-filters');
const filtersForm = filters.querySelector('.img-filters__form');

let allPictures = [];

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const hideFilters = () => {
  filters.classList.add('img-filters--inactive');
};

const compareDiscussedPictures = (firstPicture, secondPicture) => {
  const firstPictureComments = firstPicture.comments.length;
  const secondPictureComments = secondPicture.comments.length;
  return secondPictureComments - firstPictureComments;
};

const filterPictures = (pictures) => {
  allPictures = pictures;
  renderPictures(pictures);
};

const isButton = (evt) => evt.target.tagName === 'BUTTON';

const setFilter = {
  'filter-default': () => renderPictures(allPictures),
  'filter-random': () => renderPictures(getRandomArrayElementsInAmount(allPictures, RANDOM_PICTURES_COUNT)),
  'filter-discussed': () => renderPictures(allPictures.slice().sort(compareDiscussedPictures))
};

const onFiltersClick = debounce((evt) => {
  if (isButton(evt)) {
    clearPictures();
    setFilter[evt.target.id]();
  }
});

const setActiveFilter = (evt) => {
  if (isButton(evt)) {
    const currentFilter = filtersForm.querySelector(`.${ACTIVE_CLASS}`);
    currentFilter.classList.remove(ACTIVE_CLASS);

    evt.target.classList.add(ACTIVE_CLASS);
  }
};

filtersForm.addEventListener('click', onFiltersClick);

filtersForm.addEventListener('click', setActiveFilter);

export { showFilters, hideFilters, filterPictures };
