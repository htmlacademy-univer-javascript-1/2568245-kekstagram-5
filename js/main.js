import './form.js';
import { getData } from './api.js';
import { closeMessage, showServerErrorMessage } from './info-messages.js';
import { filterPictures, hideFilters, showFilters } from './filters.js';

getData()
  .then((data) => {
    closeMessage();
    filterPictures(data);
    showFilters();
  })
  .catch(() => {
    hideFilters();
    showServerErrorMessage();
  });
