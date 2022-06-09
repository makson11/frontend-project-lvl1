#!/usr/bin/env node
import readlineSync from 'readline-sync';
import randomInteger from './randomFunction.js';

// Наибольший общий делитель
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

// Реализация игры
const tellsTheRulesOfTheGameGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  const rules = 'Find the greatest common divisor of given numbers.';

  console.log(name);
  console.log(rules);

  let i = 0;
  do {
    const num1 = randomInteger(0, 100);
    const num2 = randomInteger(0, 100);
    const question = `${num1} ${num2}`;

    console.log(`Question: ${question}`);
    const answerToTheQuestion = readlineSync.question('Your answer: ');
    if (+gcd(num1, num2) === +answerToTheQuestion) {
      console.log('Correct!');
      if (true && i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answerToTheQuestion}' is wrong answer ;(. Correct answer was '${gcd(num1, num2)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    i += 1;
  } while (i <= 2);
};

tellsTheRulesOfTheGameGcd();
