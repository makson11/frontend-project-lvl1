import readlineSync from 'readline-sync';
import { getRandomInteger, isMathRound } from './helpers.js';

// Массив с символами
const arrayMathCharacters = ['+', '-', '*'];

// Случайный символ
const getRandomSign = (arr) => {
  let elem;
  for (let i = 0; i < arr.length; i += 1) {
    elem = arr[getRandomInteger(0, arr.length - 1)];
  }
  return elem;
};

// Так как ES linter ругается на функциию eval(), придумал такую фунциию
const getRandomExpression = (sign, num1, num2) => {
  switch (sign) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: break;
  }
  return false;
};

// Реализация игры
const executesLogicGameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  const rules = 'What is the result of the expression?';

  console.log(`Hello, ${name}!`);
  console.log(rules);
  let i = 0;
  do {
    const num1 = getRandomInteger(1, 100);
    const num2 = getRandomInteger(1, 10);
    const sign = getRandomSign(arrayMathCharacters);
    const interpreter = `${num1} ${sign} ${num2}`;
    const expr = getRandomExpression(sign, num1, num2);

    console.log(`Question: ${interpreter}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (!isMathRound((+expr === +yourAnswer), yourAnswer, expr, name)) {
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
    i += 1;
  } while (i <= 2);
};

export default executesLogicGameCalc;
