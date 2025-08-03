import { askUser } from './cli.js'
import { getRandomInt, getRandomObjValue, showText, tryParseNumber } from './helper.js'

export const BRAIN_GAME_KEYS = {
  even: 'even',
  calc: 'calc',
  gcd: 'gcd',
  progression: 'progression',
  prime: 'prime',
}

export const greetUser = () => {
  showText('Welcome to the Brain Games!')
  const userName = askUser('May I have your name?')
  showText(`Hello, ${userName}!`)
  return userName
}

const MATH_OPERATIONS = {
  addition: (a, b) => ({ operator: '+', correctAnswer: a + b }),
  subtraction: (a, b) => ({ operator: '-', correctAnswer: a - b }),
  multiplication: (a, b) => ({ operator: '*', correctAnswer: a * b }),
}

const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return Math.abs(a)
}

const generateProgression = (length = 10) => {
  const minLength = 5
  const progressionLength = Math.max(length, minLength)
  const start = getRandomInt(20)
  const step = getRandomInt(5) + 1
  const hiddenIndex = getRandomInt(progressionLength)

  const progression = []
  for (let i = 0; i < progressionLength; i++) {
    progression.push(start + i * step)
  }

  const correctAnswer = progression[hiddenIndex]
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return { question, correctAnswer }
}

const checkNumIsPrime = (n) => {
  if (n <= 1) return false
  if (n === 2) return true
  if (n % 2 === 0) return false

  const sqrt = Math.sqrt(n)
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false
  }

  return true
}

const askAndCheck = (questionText, correctAnswer) => {
  showText(`Question: ${questionText}`)
  const originalUserAnswer = askUser('Your answer is:')
  const formattedUserAnswer = typeof originalUserAnswer === 'string' ? originalUserAnswer.toLowerCase().trim() : ''
  return { correctAnswer, formattedUserAnswer: tryParseNumber(formattedUserAnswer), originalUserAnswer }
}

const ERROR_MSG = 'The unexpected error has been occured. The patch will be delivered soon!'
const BRAIN_GAME_RULE_MSGS = {
  [BRAIN_GAME_KEYS.even]: 'Answer "yes" if the number is even, otherwise answer "no".',
  [BRAIN_GAME_KEYS.calc]: 'What is the result of the expression?',
  [BRAIN_GAME_KEYS.gcd]: 'Find the greatest common divisor of given numbers.',
  [BRAIN_GAME_KEYS.progression]: 'What number is missing in the progression?',
  [BRAIN_GAME_KEYS.prime]: 'Answer "yes" if given number is prime. Otherwise answer "no".',
}

const BRAIN_GAME_ROUNDS_BY_TYPE = {
  [BRAIN_GAME_KEYS.even]: () => {
    const questionedNumber = getRandomInt()
    const correctAnswer = questionedNumber % 2 === 0 ? 'yes' : 'no'
    return askAndCheck(questionedNumber, correctAnswer)
  },
  [BRAIN_GAME_KEYS.calc]: () => {
    const leftOperand = getRandomInt()
    const rightOperand = getRandomInt()
    const { operator, correctAnswer } = getRandomObjValue(MATH_OPERATIONS)(leftOperand, rightOperand)
    return askAndCheck(`${leftOperand} ${operator} ${rightOperand}`, correctAnswer)
  },
  [BRAIN_GAME_KEYS.gcd]: () => {
    const leftOperand = getRandomInt()
    const rightOperand = getRandomInt()
    const correctAnswer = getGCD(leftOperand, rightOperand)
    return askAndCheck(`${leftOperand} ${rightOperand}`, correctAnswer)
  },
  [BRAIN_GAME_KEYS.progression]: () => {
    const { question, correctAnswer } = generateProgression()
    return askAndCheck(question, correctAnswer)
  },
  [BRAIN_GAME_KEYS.prime]: () => {
    const questionedNumber = getRandomInt(100)
    const correctAnswer = checkNumIsPrime(questionedNumber) ? 'yes' : 'no'
    return askAndCheck(questionedNumber, correctAnswer)
  },
}

const ESSENTIAL_CORRECT_ANSWERS_NUM = 3

export default function runBaseGameLoop(gameType) {
  const userName = greetUser()
  const gameRuleMsg = BRAIN_GAME_RULE_MSGS[gameType]
  const runRound = BRAIN_GAME_ROUNDS_BY_TYPE[gameType]

  if (typeof gameRuleMsg !== 'string' || typeof runRound !== 'function') {
    showText(ERROR_MSG)
    return
  };

  showText(gameRuleMsg)
  let correctAnswersCount = 0

  while (correctAnswersCount < ESSENTIAL_CORRECT_ANSWERS_NUM) {
    const runRound = BRAIN_GAME_ROUNDS_BY_TYPE[gameType]
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
