import { getRandomInteger, startGame } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  let initialValue = 2;

  if (num === 1) {
    return false;
  }
  for (initialValue; initialValue < num; initialValue += 1) {
    if (num % initialValue === 0) {
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
