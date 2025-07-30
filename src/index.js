import { greetUser } from '../bin/brain-games.js';
import { askUser } from './cli.js';
import { getRandomInt, showText } from './helper.js';

export const ESSENTIAL_CORRECT_ANSWERS_NUM = 3;

const askAndCheck = (questionText, correctAnswer) => {
  const originalUserAnswer = askUser(`Question: ${questionText}`);
  const formattedUserAnswer = typeof originalUserAnswer === 'string' ? originalUserAnswer.toLowerCase().trim() : '';
  return { correctAnswer, originalUserAnswer, formattedUserAnswer };
};

export const BRAIN_GAME_KEYS = {
  even: 'even',
  calc: 'calc',
};

const BRAIN_GAME_RULE_MSG = {
  [BRAIN_GAME_KEYS.even]: () => showText('Answer "yes" if the number is even, otherwise answer "no".'),
  [BRAIN_GAME_KEYS.calc]: () => showText('What is the result of the expression?'),
};

const BRAIN_GAME_ROUNDS_BY_TYPE = {
  [BRAIN_GAME_KEYS.even]: () => {
    const questionedNumber = getRandomInt();
    const correctAnswer = questionedNumber % 2 === 0 ? 'yes' : 'no';
    return askAndCheck(questionedNumber, correctAnswer);
  },
  [BRAIN_GAME_KEYS.calc]: () => {
    const leftOperand = getRandomInt();
    const rightOperand = getRandomInt();
    const correctAnswer = leftOperand + rightOperand;
    return askAndCheck(`${leftOperand} + ${rightOperand}`, correctAnswer);
  },
};

export default function runBaseGameLoop(gameType) {
  const userName = greetUser();
  const showGameRuleMsg = BRAIN_GAME_RULE_MSG[gameType];
  showGameRuleMsg();

  let correctAnswersCount = 0;

  while (correctAnswersCount < ESSENTIAL_CORRECT_ANSWERS_NUM) {
    const runRound = BRAIN_GAME_ROUNDS_BY_TYPE[gameType];
    if (typeof runRound !== 'function') {
      showText('The unexpected error has been occured. A patch will be delivered soon!');
      return;
    }

    const { correctAnswer, originalUserAnswer, formattedUserAnswer } = runRound();
    showText(`Your answer is: ${originalUserAnswer}`);

    if (correctAnswer === formattedUserAnswer) {
      showText('Correct!');
      correctAnswersCount += 1;
    }
    else {
      showText(`'${formattedUserAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      showText(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswersCount === ESSENTIAL_CORRECT_ANSWERS_NUM) showText(`Congratulations, ${userName}!`);
};
