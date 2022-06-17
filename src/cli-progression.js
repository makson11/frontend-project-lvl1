import readlineSync from 'readline-sync';
import { getRandomInteger, isMathRound } from './helpers.js';

// Генерирую массив с наxfлом в диапозоне от 0 до 100, длиной масива от 5 до 10 и шагом от 1 до 10;
const getRandomArray = () => {
  const arr = [];
  const iter = getRandomInteger(1, 10);

  for (let i = getRandomInteger(0, 100); arr.length <= getRandomInteger(4, 10); i += iter) {
    arr.push(i);
  }
  return arr;
};

// получаю массив формата ['2, 4, 6, .., 10', 8],
// где Array[0] строка с вопросом, а Array[1] правильный ответ;
const getArrayTheAnswer = (arr) => {
  const result = [''];
  const randomIndex = getRandomInteger(0, arr.length - 1);

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[randomIndex]) {
      result[0] += '.. ';
      result.push(arr[i]);
    } else {
      result[0] += `${arr[i]} `;
    }
  }
  return result;
};

// Реализация игры
const executesLogicGameProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  const rules = 'What number is missing in the progression?';

  console.log(`Hello, ${name}!`);
  console.log(rules);

  let i = 0;
  do {
    const question = getArrayTheAnswer(getRandomArray());

    console.log(`Question: ${question[0].trim()}`);
    const answerToTheQuestion = readlineSync.question('Your answer: ');
    if (isMathRound((+answerToTheQuestion === +question[1]), answerToTheQuestion, question[1], name) === false) {
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
    i += 1;
  } while (i <= 2);
};

export default executesLogicGameProgression;
