import readlineSync from 'readline-sync';
import { getRandomInteger, isRound } from './helpers.js';
// поиск простых чисел
const isPrimeNumber = (num) => {
  let flag = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

// Реализация игры
const executesLogicGamePrime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  console.log(`Hello, ${name}!`);
  console.log(rules);

  let i = 0;
  do {
    const question = getRandomInteger(1, 100);

    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    const answerYes = 'yes';
    const answerNo = 'no';

    if (!isRound(isPrimeNumber(question), yourAnswer, answerYes, answerNo, name)) {
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
    i += 1;
  } while (i <= 2);
};

export default executesLogicGamePrime;
