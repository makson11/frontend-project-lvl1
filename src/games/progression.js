import { getRandomInteger, startGame } from '../index.js';

const rules = 'What number is missing in the progression?';

const generatingGameLogic = () => {
  const progressionArray = [];
  const step = getRandomInteger(1, 10);
  const maxProgressionLength = getRandomInteger(4, 10);
  let initialValue = getRandomInteger(0, 100);

  for (initialValue; progressionArray.length <= maxProgressionLength; initialValue += step) {
    progressionArray.push(initialValue);
  }
  const hiddenIndexItem = getRandomInteger(0, progressionArray.length - 1);
  const answer = progressionArray[hiddenIndexItem];

  progressionArray[hiddenIndexItem] = '..';

  const question = progressionArray.join(' ');

  return [question, answer];
};

export default () => startGame(generatingGameLogic, rules);
