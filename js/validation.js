const imageUploadForm = document.querySelector('#upload-select-image');
const submitButton = document.querySelector('#upload-submit');

const pristine = new Pristine(imageUploadForm, {
  classTo:'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'error-message'
});

const checkValidation = () => {
  if (!pristine.validate()) {
    submitButton.setAttribute('disabled', '');
  } else {
    submitButton.removeAttribute('disabled');
  }
};

export { pristine, checkValidation };
