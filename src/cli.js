import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcom to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  return name;
};

export default welcome;
