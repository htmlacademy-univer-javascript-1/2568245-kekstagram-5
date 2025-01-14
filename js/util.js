const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (list) => list[getRandomInteger(0, list.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';


export { getRandomInteger, getRandomArrayElement, isEscapeKey };


