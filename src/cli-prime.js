import { getRandomInteger, startGame } from './index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const executesLogicGamePrime = () => {
  const question = getRandomInteger(1, 100);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGame(executesLogicGamePrime, rules);
