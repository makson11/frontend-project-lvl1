import readlineSync from 'readline-sync';
import { getRandomInteger, isRound } from './helpers.js';

const executesLogicGameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  const rules = 'Answer "yes" it the number is even, otherwise answer "no"';

  console.log(`Hello, ${name}!`);
  console.log(rules);

  let i = 0;
  do {
    const randomNumb = getRandomInteger(1, 100);

    console.log(`Question: ${randomNumb}`);

    const answerToTheQuestion = readlineSync.question('Your answer: ');
    const answerYes = 'yes';
    const answerNo = 'no';

    if (isRound((randomNumb % 2 === 0), answerToTheQuestion, answerYes, answerNo, name) === false) {
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
    i += 1;
  } while (i <= 2);
};

export default executesLogicGameEven;
