const RENDER_DELAY = 500;

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (list) => list[getRandomInteger(0, list.length - 1)];

const getRandomArrayElementsInAmount = (list, amount) => {
  const randomPictures = [];
  for (let i = 0; i < amount; i++) {
    let randomPicture = getRandomArrayElement(list);
    while (randomPictures.includes(randomPicture)) {
      randomPicture = getRandomArrayElement(list);
    }
    randomPictures.push(randomPicture);
  }
  return randomPictures;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = RENDER_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  getRandomInteger,
  getRandomArrayElement,
  getRandomArrayElementsInAmount,
  isEscapeKey,
  debounce
};
