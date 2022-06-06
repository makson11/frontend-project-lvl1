import readlineSync from 'readline-sync';
import randomInteger from './randomFunction.js';

// поиск простых чисел
const primeNumber = (num) => {
  let flag = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

// Реализация игры
const tellsTheRulesOfTheGamePrime = () => {
  console.log('Welcom to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  console.log(name);
  console.log(rules);

  let i = 0;
  do {
    const question = randomInteger(1, 100);

    console.log(`Question: ${question}`);
    const answerToTheQuestion = readlineSync.question('Your answer: ');
    if (primeNumber(question)) {
      if (answerToTheQuestion === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answerToTheQuestion}' is wrong answer ;(. Correct answer was 'yes'.Let's try again, ${name}`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
    if (!primeNumber(question)) {
      if (answerToTheQuestion === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${answerToTheQuestion}' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${name}`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}`);
    }
    i += 1;
  } while (i <= 2);
};

tellsTheRulesOfTheGamePrime();
