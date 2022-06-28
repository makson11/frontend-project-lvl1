import { getRandomInteger, startGame } from '../index.js';

const rules = 'What number is missing in the progression?';

const getRandomArray = () => {
  const arr = [];
  const iter = getRandomInteger(1, 10);
  const condition = getRandomInteger(4, 10);

  for (let i = getRandomInteger(0, 100); arr.length <= condition; i += iter) {
    arr.push(i);
  }
  return arr;
};

const getArrayTheAnswer = (arr) => {
  const result = [[]];
  const randomIndex = getRandomInteger(0, arr.length - 1);

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[randomIndex]) {
      result[0].push('..');
      result.push(arr[i]);
    } else {
      result[0].push(arr[i]);
    }
  }
  return result;
};

const executesLogicGameProgression = () => {
  const variableArray = getArrayTheAnswer(getRandomArray());
  return [variableArray[0].join(' '), variableArray[1]];
};

export default () => startGame(executesLogicGameProgression, rules);
