// случайное число от min до (max+1)
export const getRandomInteger = (min, max) => {
  const randNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randNumber);
};

// Функция для реализации логики с математическими операциями
export const isMathRound = (condition, answerToTheQuestion, rightAnswer, name) => {
  let flag = true;
  if (condition) {
    console.log('Correct!');
  } else {
    console.log(`'${answerToTheQuestion}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    flag = false;
  }
  return flag;
};

// Функция для реализации логики с выбором ответа да или нет
export const isRound = (condition, answerToTheQuestion, answerYes, answerNo, name) => {
  let flag = true;
  if (condition) {
    if (answerToTheQuestion === answerYes) {
      console.log('Correct!');
    } else {
      console.log(`'${answerToTheQuestion}' is wrong answer ;(. Correct answer was '${answerYes}'.Let's try again, ${name}`);
      console.log(`Let's try again, ${name}!`);
      flag = false;
    }
  }

  if (!condition) {
    if (answerToTheQuestion === answerNo) {
      console.log('Correct!');
    } else {
      console.log(`'${answerToTheQuestion}' is wrong answer ;(. Correct answer was '${answerNo}'.Let's try again, ${name}`);
      console.log(`Let's try again, ${name}!`);
      flag = false;
    }
  }
  return flag;
};
