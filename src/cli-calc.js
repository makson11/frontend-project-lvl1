import { getRandomInteger, startGame } from './index.js';

const rules = 'What is the result of the expression?';

const arrayMathOperators = ['+', '-', '*'];

const getRandomOperators = (arr) => {
  let elem;
  for (let i = 0; i < arr.length; i += 1) {
    elem = arr[getRandomInteger(0, arr.length - 1)];
  }
  return elem;
};

const getRandomExpression = (sign, num1, num2) => {
  switch (sign) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error('Unknown state!');
  }
};

const executesLogicGameCalc = () => {
  const firstNum = getRandomInteger(1, 100);
  const secondNum = getRandomInteger(1, 10);
  const operator = getRandomOperators(arrayMathOperators);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const expresion = getRandomExpression(operator, firstNum, secondNum);

  return [question, expresion];
};

export default () => startGame(executesLogicGameCalc, rules);
