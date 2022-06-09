import readlineSync from 'readline-sync';

console.log('Welcom to the Brain Games!');

const getsTheUserName = () => {
  const name = readlineSync.question('May I have your name?');
  return `Hello, ${name}!`;
};

export default getsTheUserName;
