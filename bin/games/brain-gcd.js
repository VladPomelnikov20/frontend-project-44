#!/usr/bin/env node

import runBaseGameLoop, { BRAIN_GAME_KEYS } from '../../src/index.js';

const brainGCD = () => runBaseGameLoop(BRAIN_GAME_KEYS.gcd);
brainGCD();
