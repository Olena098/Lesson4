const generateArray = (length, startNumber) => {
  const array = [];

  if (isNaN(length) || isNaN(startNumber)) {
    console.log('Будь ласка, введіть числові значення для довжини масиву та початкового числа.');
    return array;
  }

  for (let i = startNumber; i < startNumber + length; i++) {
    array.push(i);
  }

  return array;
};

const prompt = require('prompt-sync')();

const length = parseInt(prompt('Введіть довжину масиву: '));
const startNumber = parseInt(prompt('З якого числа почнеться масив: '));

const generatedArray = generateArray(length, startNumber);
console.log('Згенерований масив:', generatedArray);
