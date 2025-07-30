#!/usr/bin/env node

import { askUser } from '../src/cli.js';
import { showText } from '../src/helper.js';

export const greetUser = () => {
  showText('Welcome to the Brain Games!');
  const userName = askUser('May I have your name?');
  showText(`Hello, ${userName}!`);
  return userName;
};
