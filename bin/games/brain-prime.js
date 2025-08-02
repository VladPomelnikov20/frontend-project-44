#!/usr/bin/env node

import runBaseGameLoop, { BRAIN_GAME_KEYS } from '../../src/index.js'

const brainPrime = () => runBaseGameLoop(BRAIN_GAME_KEYS.prime)
brainPrime()
