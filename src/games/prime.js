import { getRandomInteger, startGame } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const executesLogicGamePrime = () => {
  const question = getRandomInteger(1, 100);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => startGame(executesLogicGamePrime, rules);
