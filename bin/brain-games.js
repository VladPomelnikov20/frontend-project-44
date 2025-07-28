#!/usr/bin/env node

import { askUser } from '../src/cli.js';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
};

export const greetUserByName = () => {
  const userName = askUser('May I have your name?');
  console.log(`Hello, ${userName}!`);
  return userName;
};
