import { getRandomInt } from '../helper.js'
import runBaseGameLoop, { askAndCheck } from '../index.js'

const GAME_RULE_MSG = 'Find the greatest common divisor of given numbers.'

const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return Math.abs(a)
}

const runRound = () => {
  const leftOperand = getRandomInt()
  const rightOperand = getRandomInt()
  const correctAnswer = getGCD(leftOperand, rightOperand)
  return askAndCheck(`${leftOperand} ${rightOperand}`, correctAnswer)
}

const brainGCD = () => runBaseGameLoop({ runRound, gameRuleMsg: GAME_RULE_MSG })
export default brainGCD
