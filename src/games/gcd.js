import { getRandomInteger, startGame } from '../index.js';

const getGcd = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return getGcd(secondNum, firstNum % secondNum);
};

const rules = 'Find the greatest common divisor of given numbers.';

const executesLogicGameGcd = () => {
  const firstNum = getRandomInteger(0, 100);
  const secondNum = getRandomInteger(0, 100);
  const question = `${firstNum} ${secondNum}`;
  const expresion = getGcd(firstNum, secondNum);

  return [question, expresion];
};

export default () => startGame(executesLogicGameGcd, rules);
