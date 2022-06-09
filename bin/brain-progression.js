#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomInteger from './randomFunction.js';

// Генерирую массив с наxfлом в диапозоне от 0 до 100, длиной масива от 5 до 10 и шагом от 1 до 10;
const getRandomArray = () => {
  const arr = [];
  const iter = randomInteger(1, 10);

  for (let i = randomInteger(0, 100); arr.length <= randomInteger(4, 10); i += iter) {
    arr.push(i);
  }
  return arr;
};

// получаю массив формата ['2, 4, 6, .., 10', 8],
// где Array[0] строка с вопросом, а Array[1] правильный ответ;
const getArrayTheAnswer = (arr) => {
  const result = [''];
  const randomIndex = randomInteger(0, arr.length - 1);

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
const tellsTheRulesOfTheGameProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  const rules = 'What number is missing in the progression?';

  console.log(name);
  console.log(rules);

  let i = 0;
  do {
    const question = getArrayTheAnswer(getRandomArray());

    console.log(`Question: ${question[0].trim()}`);
    const answerToTheQuestion = readlineSync.question('Your answer: ');
    if (+answerToTheQuestion === +question[1]) {
      console.log('Correct!');
      if (true && i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answerToTheQuestion}' is wrong answer ;(. Correct answer was '${question[1]}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    i += 1;
  } while (i <= 2);
};

tellsTheRulesOfTheGameProgression();
