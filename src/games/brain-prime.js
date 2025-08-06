import runBaseGameLoop, { askAndCheck } from '../index.js'
import { getRandomInt } from '../helper.js'

const GAME_RULE_MSG = 'Answer "yes" if given number is prime. Otherwise answer "no".'

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

const runRound = () => {
  const questionedNumber = getRandomInt(100)
  const correctAnswer = checkNumIsPrime(questionedNumber) ? 'yes' : 'no'
  return askAndCheck(questionedNumber, correctAnswer)
}

const brainPrime = () => runBaseGameLoop({ runRound, gameRuleMsg: GAME_RULE_MSG })
export default brainPrime
