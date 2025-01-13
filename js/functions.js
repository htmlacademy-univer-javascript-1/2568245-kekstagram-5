
//Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.

const stringLengthCheck = (string, maxLength) => string.length < maxLength;


stringLengthCheck('wasup', 10);


//Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
const isPalindrome = (string) => string.toLowerCase().replaceAll(' ', '') === string.toLowerCase().split('').reverse().join('').replaceAll(' ', '');


isPalindrome('довод');

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа (с усложнением).

function findingNumber(string) {
  const numbers = [];
  for (let i = 0; i <= 9; i++) {
    numbers.push(i.toString());
  }

  if (typeof (string) === 'string') {
    const consistentStringArr = string.replaceAll(' ', '').split('');
    const onlyStringifiedNumbersArr = consistentStringArr.filter((el) => numbers[el]);
    return parseInt(onlyStringifiedNumbersArr.join(''), 10);
  } else {
    const consistentNumbersToStringArr = string.toString().replaceAll(' ', '').split('');
    const onlyStringifiedNumbersArr = consistentNumbersToStringArr.filter((el) => numbers[el]);
    return parseInt(onlyStringifiedNumbersArr.join(''), 10);
  }

}

findingNumber('ECMAScript 2022');
