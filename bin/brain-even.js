// случайное число от min до (max+1)
const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const tellsTheRulesOfTheGme = () => {
    const name = readlineSync.question('May I have your name?');
    const rules = 'Answer "yes" it the number is even, otherwise answer "on"';
    console.log(rules);

    const randomNumb = randomInteger(1, 100);

    let i = 1;
    do {
        console.log(`Question: ${randomNumb()}`);
        const answerToTheQuestion = readlineSync.question('Your answer: ');
        if(randomNumb() % 2 === 0 && answerToTheQuestion === 'Yes'){
            console.log('Correct!');
        }
        i++;
    } while (i <= 3);

};