import { getRandomInt } from '../helper.js'
import runBaseGameLoop, { askAndCheck } from '../index.js'

const GAME_RULE_MSG = 'Answer "yes" if the number is even, otherwise answer "no".'

const runRound = () => {
  const questionedNumber = getRandomInt()
  const correctAnswer = questionedNumber % 2 === 0 ? 'yes' : 'no'
  return askAndCheck(questionedNumber, correctAnswer)
}

const brainEven = () => runBaseGameLoop({ runRound, gameRuleMsg: GAME_RULE_MSG })
export default brainEven
