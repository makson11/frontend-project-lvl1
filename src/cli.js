import readlineSync from 'readline-sync';

const getsTheUserName = () => {
  console.log('Welcom to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  return `Hello, ${name}!`;
};

export default getsTheUserName;
