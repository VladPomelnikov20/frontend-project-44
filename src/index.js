import { askUser } from './cli.js'
import { showText, tryParseNumber } from './helper.js'

const ERROR_MSG = 'The unexpected error has been occured. The patch will be delivered soon!'
const ESSENTIAL_CORRECT_ANSWERS_NUM = 3

export const greetUser = () => {
  showText('Welcome to the Brain Games!')
  const userName = askUser('May I have your name?')
  showText(`Hello, ${userName}!`)
  return userName
}

export const askAndCheck = (questionText, correctAnswer) => {
  showText(`Question: ${questionText}`)
  const originalUserAnswer = askUser('Your answer is:')
  const formattedUserAnswer = typeof originalUserAnswer === 'string' ? originalUserAnswer.toLowerCase().trim() : ''
  return { correctAnswer, formattedUserAnswer: tryParseNumber(formattedUserAnswer), originalUserAnswer }
}

export default function runBaseGameLoop({ runRound, gameRuleMsg }) {
  const userName = greetUser()

  if (typeof gameRuleMsg !== 'string' || typeof runRound !== 'function') {
    showText(ERROR_MSG)
    return
  };

  showText(gameRuleMsg)
  let correctAnswersCount = 0

  while (correctAnswersCount < ESSENTIAL_CORRECT_ANSWERS_NUM) {
    const { correctAnswer, originalUserAnswer, formattedUserAnswer } = runRound()

    if (correctAnswer === formattedUserAnswer) {
      showText('Correct!')
      correctAnswersCount += 1
    }
    else {
      showText(`'${originalUserAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      break
    }
  }

  if (correctAnswersCount === ESSENTIAL_CORRECT_ANSWERS_NUM) showText(`Congratulations, ${userName}!`)
  else showText(`Let's try again, ${userName}!`)
  return
};
