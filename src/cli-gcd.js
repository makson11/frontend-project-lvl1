import { getRandomInteger, startGame } from './index.js';
// Наибольший общий делитель
const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
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
