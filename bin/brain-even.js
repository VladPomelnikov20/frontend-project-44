#!/usr/bin/env node

import { askUser } from '../src/cli.js';
import { greetUserByName, greetUser } from './brain-games.js';

const ESSENTIAL_CORRECT_ANSWERS_NUM = 3;

const getRandomInt = () => {
  return Math.floor(Math.random() * 100);
};

const askEvenNumber = () => {
  const questionedNumber = getRandomInt();

  const correctAnswer = questionedNumber % 2 === 0 ? 'yes' : 'no';
  const originalUserAnswer = askUser(`Question: ${questionedNumber}`);
  const formattedUserAnswer = typeof originalUserAnswer === 'string' ? originalUserAnswer.toLowerCase().trim() : '';

  return { correctAnswer, originalUserAnswer, formattedUserAnswer };
};

const showGameRuleMsg = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export default function brainEven() {
  greetUser();
  const userName = greetUserByName();
  showGameRuleMsg();

  let correctAnswersCount = 0;

  while (correctAnswersCount < ESSENTIAL_CORRECT_ANSWERS_NUM) {
    const { correctAnswer, originalUserAnswer, formattedUserAnswer } = askEvenNumber();
    console.log(`Your answer is: ${originalUserAnswer}`);

    if (correctAnswer === formattedUserAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    }
    else {
      console.log(`'${formattedUserAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswersCount === ESSENTIAL_CORRECT_ANSWERS_NUM) console.log(`Congratulations, ${userName}!`);
}

brainEven();
