import readlineSync from 'readline-sync';
import randomInteger from './randomFunction.js';

// Массив с символами
const arrSigns = ['+', '-', '*'];

// Случайный символ
const randomSign = (arr) => {
  let elem;
  for (let i = 0; i < arr.length; i += 1) {
    elem = arr[randomInteger(0, arr.length - 1)];
  }
  return elem;
};

// Так как ES linter ругается на функциию eval(), придумал такую фунциию
const randomExpression = (sign, num1, num2) => {
  switch (sign) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: break;
  }
  return false;
};

// Реализация игры
const tellsTheRulesOfTheGme = () => {
  console.log('Welcom to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  const rules = 'What is the result of the expression?';

  console.log(name);
  console.log(rules);

  let i = 0;
  do {
    const num1 = randomInteger(1, 100);
    const num2 = randomInteger(1, 10);
    const sign = randomSign(arrSigns);
    const interpreter = `${num1} ${sign} ${num2}`;

    console.log(`Question: ${interpreter}`);
    const answerToTheQuestion = readlineSync.question('Your answer: ');
    if (+randomExpression(sign, num1, num2) === +answerToTheQuestion) {
      console.log('Correct!');
      if (true && i === 2) {
        console.log(`Congratulations, ${name}`);
      }
    } else {
      console.log(`'${answerToTheQuestion}' is wrong answer ;(. Correct answer was '${randomExpression(sign, num1, num2)}'. Let's try again, ${name}!`);
      break;
    }
    i += 1;
  } while (i <= 2);
};

tellsTheRulesOfTheGme();
