import readlineSync from 'readline-sync';
import randomInteger from './randomFunction.js';

const tellsTheRulesOfTheGameEven = () => {
  console.log('Welcom to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  const rules = 'Answer "yes" it the number is even, otherwise answer "no"';

  console.log(name);
  console.log(rules);

  let i = 0;
  do {
    const randomNumb = randomInteger(1, 100);

    console.log(`Question: ${randomNumb}`);

    const answerToTheQuestion = readlineSync.question('Your answer: ');
    if (randomNumb % 2 === 0) {
      if (answerToTheQuestion === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answerToTheQuestion}' is wrong answer ;(. Correct answer was 'yes'.Let's try again, ${name}`);
        break;
      }
    }

    if (randomNumb % 2 !== 0) {
      if (answerToTheQuestion === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${answerToTheQuestion}' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${name}`);
        break;
      }
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}`);
    }
    i += 1;
  } while (i <= 2);
};

tellsTheRulesOfTheGameEven();
