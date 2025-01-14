const FILE_TYPES = ['.jpg', '.jpeg', '.png'];

const setPicturePreview = (fileInput, preview) => {
  const file = fileInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((extension) => fileName.endsWith(extension));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
};

export {setPicturePreview};
