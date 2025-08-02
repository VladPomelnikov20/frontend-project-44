#!/usr/bin/env node

import runBaseGameLoop, { BRAIN_GAME_KEYS } from '../../src/index.js'

const brainCalc = () => runBaseGameLoop(BRAIN_GAME_KEYS.calc)
brainCalc()
