import readlineSync from 'readline-sync';

const getsTheUserName = () => {
  const name = readlineSync.question('May I have your name?');
  return `Hello, ${name}!`;
};

export default getsTheUserName;
