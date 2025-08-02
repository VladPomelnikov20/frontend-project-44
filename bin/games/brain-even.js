#!/usr/bin/env node

import runBaseGameLoop, { BRAIN_GAME_KEYS } from '../../src/index.js'

const brainEven = () => runBaseGameLoop(BRAIN_GAME_KEYS.even)
brainEven()
