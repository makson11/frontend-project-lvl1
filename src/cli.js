import readlineSync from 'readline-sync';

export const getsTheUserName = () => {
  console.log('Welcom to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  return `Hello, ${name}!`;
};

