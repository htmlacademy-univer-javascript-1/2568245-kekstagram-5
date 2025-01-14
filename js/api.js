const getData = () => fetch('https://29.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((data) => Promise.resolve(data))
  .catch(() => Promise.reject());

const sendData = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  return fetch(
    'https://29.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        return Promise.resolve;
      }
      throw new Error();
    })
    .catch(() => Promise.reject());
};

export { getData, sendData };
