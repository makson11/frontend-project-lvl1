import readlineSync from 'readline-sync';
import { getRandomInteger, isMathRound } from './helpers.js';

// Наибольший общий делитель
const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

// Реализация игры
const executesLogicGameGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  const rules = 'Find the greatest common divisor of given numbers.';

  console.log(`Hello, ${name}!`);
  console.log(rules);

  let i = 0;
  do {
    const num1 = getRandomInteger(0, 100);
    const num2 = getRandomInteger(0, 100);
    const question = `${num1} ${num2}`;

    console.log(`Question: ${question}`);
    const answerToTheQuestion = readlineSync.question('Your answer: ');

    if (isMathRound((+getGcd(num1, num2) === +answerToTheQuestion), answerToTheQuestion, getGcd(num1, num2), name) === false) {
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
    i += 1;
  } while (i <= 2);
};

export default executesLogicGameGcd;
