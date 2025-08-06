import { getRandomInt, getRandomObjValue } from '../helper.js'
import runBaseGameLoop, { askAndCheck } from '../index.js'

const GAME_RULE_MSG = 'What is the result of the expression?'

const MATH_OPERATIONS = {
  addition: (a, b) => ({ operator: '+', correctAnswer: a + b }),
  subtraction: (a, b) => ({ operator: '-', correctAnswer: a - b }),
  multiplication: (a, b) => ({ operator: '*', correctAnswer: a * b }),
}

const runRound = () => {
  const leftOperand = getRandomInt()
  const rightOperand = getRandomInt()
  const { operator, correctAnswer } = getRandomObjValue(MATH_OPERATIONS)(leftOperand, rightOperand)
  return askAndCheck(`${leftOperand} ${operator} ${rightOperand}`, correctAnswer)
}

const brainCalc = () => runBaseGameLoop({ runRound, gameRuleMsg: GAME_RULE_MSG })
export default brainCalc
