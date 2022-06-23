import readlineSync from 'readline-sync';

export const getRandomInteger = (min, max) => {
  const randNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randNumber);
};

const askName = () => {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const startGame = (getQuestionAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = askName();

  for (let i = 0; i <= 2; i += 1) {
    const answerQuestion = getQuestionAnswer();
    const [question, expresion] = answerQuestion;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(expresion)) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${expresion}. Let's try again, ${userName}`);
      break;
    }
  }
};
