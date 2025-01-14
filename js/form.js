import './hashtag-validator.js';
import './comment-validator.js';
import { isEscapeKey } from './util.js';
import { pristine } from './validation.js';
import { hideSlider, setCurrentEffect, updateImageFilter } from './effects.js';
import { DEFAULT } from './effects-settings.js';
import { sendData } from './api.js';

const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const IMAGE_SCALE_STEP = 25;

const imageUploadForm = document.querySelector('#upload-select-image');
const imageInputField = document.querySelector('.img-upload__input');
const imageEdit = document.querySelector('.img-upload__overlay');
const editorCloseButton = imageEdit.querySelector('.img-upload__cancel');
const imagePreview = imageEdit.querySelector('.img-upload__preview').children[0];
const scaleInputField = imageEdit.querySelector('.scale__control--value');
const scaleDecreaseButton = imageEdit.querySelector('.scale__control--smaller');
const scaleIncreaseButton = imageEdit.querySelector('.scale__control--bigger');

let currentScale = MAX_SCALE_VALUE;

imageUploadForm.addEventListener('submit', sendData);

const onEditorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditor();
  }
};

const onEditorCloseClick = () => {
  closeEditor();
};

const changeImageScale = () => {
  imagePreview.style.transform = `scale(${currentScale / 100})`;
};

const updateScale = () => {
  scaleInputField.value = `${currentScale}%`;
  changeImageScale();
};

const clearForm = () => {
  imageUploadForm.reset();
  currentScale = MAX_SCALE_VALUE;
  setCurrentEffect(DEFAULT);
  updateScale();
  updateImageFilter();
  hideSlider();
};

const showEditor = () => {
  document.body.classList.add('modal-open');
  imageEdit.classList.remove('hidden');

  updateScale();

  editorCloseButton.addEventListener('click', onEditorCloseClick);
  document.addEventListener('keydown', onEditorEscKeydown);
};

function closeEditor (clear = true) {
  document.body.classList.remove('modal-open');
  imageEdit.classList.add('hidden');

  if (clear) {
    clearForm();
  }

  editorCloseButton.removeEventListener('click', onEditorCloseClick);
  document.removeEventListener('keydown', onEditorEscKeydown);
}

const onImageUpload = () => {
  pristine.validate();
  showEditor();
};

imageInputField.addEventListener('change', onImageUpload);

const onDecreaseClick = () => {
  if (currentScale !== MIN_SCALE_VALUE) {
    currentScale -= IMAGE_SCALE_STEP;
    updateScale();
  }
};

const onIncreaseClick = () => {
  if (currentScale !== MAX_SCALE_VALUE) {
    currentScale += IMAGE_SCALE_STEP;
    updateScale();
  }
};

scaleDecreaseButton.addEventListener('click', onDecreaseClick);
scaleIncreaseButton.addEventListener('click', onIncreaseClick);

export { closeEditor, showEditor };
