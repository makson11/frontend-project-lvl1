import { getRandomInteger, startGame } from '../index.js';

const rules = 'What number is missing in the progression?';

const getArrayProgressions = () => {
  const progressionArray = [];
  const step = getRandomInteger(1, 10);
  const maxProgressionLength = getRandomInteger(4, 10);
  let initialValue = getRandomInteger(0, 100);

  for (initialValue; progressionArray.length <= maxProgressionLength; initialValue += step) {
    progressionArray.push(initialValue);
  }

  return progressionArray;
};

const generatingGameLogic = () => {
  const progression = getArrayProgressions();
  const hiddenIndexItem = getRandomInteger(0, progression.length - 1);
  const answer = progression[hiddenIndexItem];

  progression[hiddenIndexItem] = '..';

  const question = progression.join(' ');

  return [question, answer];
};

export default () => startGame(generatingGameLogic, rules);
