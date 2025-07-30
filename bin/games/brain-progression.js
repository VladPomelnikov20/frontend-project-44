#!/usr/bin/env node

import runBaseGameLoop, { BRAIN_GAME_KEYS } from '../../src/index.js';

const brainProgression = () => runBaseGameLoop(BRAIN_GAME_KEYS.progression);
brainProgression();
