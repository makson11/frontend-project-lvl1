import readlineSync from 'readline-sync';

export const getsTheUserName = () => {
    const name = readlineSync.question('May I have your name?');
    return `Hello, ${name}!`;
};
