function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);

}

const messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const userNames = ['Вася', 'Олег', 'Шмель', 'Саша', 'Вова Адидас', 'Виктор', 'Аркадий Семенович Матрасов'];
const descriptions = ['Описание: начало', 'Темное Описание', 'Темное описание: возвращение легенды', 'Темное описание против светлого описания: на заре справедливости', 'Под описанием собрались буквы, ребяяята'];


function createComments(){
  const commentArr = [];
  for (let i = 0; i < getRandomIntInclusive(0, 30); i++) {
    const commentObj = {
      id: i + 1,
      avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
      message: messages[getRandomIntInclusive(0, messages.length - 1)],
      name: userNames[getRandomIntInclusive(0, userNames.length - 1)]
    };

    commentArr.push(commentObj);

  }
  return commentArr;
}


function createTemporaryData(){

  const temporaryDataArray = [];

  for (let i = 0; i < 25; i++) {
    const temporaryDataObj = {
      id: i + 1,
      url: `photos/${i + 1}`,
      description: descriptions[getRandomIntInclusive(0, descriptions.length - 1)],
      likes: getRandomIntInclusive(15, 200),
      comments: createComments()
    };

    temporaryDataArray.push(temporaryDataObj);

  }
  return temporaryDataArray;

}

createTemporaryData();
