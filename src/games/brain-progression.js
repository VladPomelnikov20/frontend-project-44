import runBaseGameLoop, { askAndCheck } from '../index.js'
import { getRandomInt } from '../helper.js'

const GAME_RULE_MSG = 'What number is missing in the progression?'

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

const runRound = () => {
  const { question, correctAnswer } = generateProgression()
  return askAndCheck(question, correctAnswer)
}

const brainProgression = () => runBaseGameLoop({ runRound, gameRuleMsg: GAME_RULE_MSG })
export default brainProgression
