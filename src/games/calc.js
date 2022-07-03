import { getRandomInteger, startGame } from '../index.js';

const rules = 'What is the result of the expression?';

const arrayMathOperators = ['+', '-', '*'];

const getResultMathExpression = (sign, num1, num2) => {
  switch (sign) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error('Unknown state!');
  }
};

const executesLogicGameCalc = () => {
  const operator = arrayMathOperators[getRandomInteger(0, arrayMathOperators.length - 1)];
  const firstNum = getRandomInteger(1, 100);
  const secondNum = getRandomInteger(1, 10);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const expresion = getResultMathExpression(operator, firstNum, secondNum);

  return [question, expresion];
};

export default () => startGame(executesLogicGameCalc, rules);
