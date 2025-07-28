import readlineSync from 'readline-sync';

export const askUser = (questionText) => {
  return readlineSync.question(`${questionText} `);
};
