export const getRandomInt = (limit = 10) => {
  return Math.floor(Math.random() * limit);
};

export const getRandomIntWithoutZero = (limit = 10) => {
  let num;
  do {
    num = getRandomInt(limit);
  } while (num === 0);
  return num;
};

export const showText = text => console.log(text);

export const tryParseNumber = (value) => {
  const num = Number(value);
  return !isNaN(num) && value.trim() !== '' ? num : value;
};
