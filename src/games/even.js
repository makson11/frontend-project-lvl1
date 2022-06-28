import { getRandomInteger, startGame } from '../index.js';

const rules = 'Answer "yes" it the number is even, otherwise answer "no"';
const isEven = (num) => num % 2 === 0;

const executesLogicGameEven = () => {
  const question = getRandomInteger(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => startGame(executesLogicGameEven, rules);
