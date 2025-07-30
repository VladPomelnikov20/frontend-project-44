export const getRandomInt = (limit = 100) => {
  return Math.floor(Math.random() * limit);
};

export const showText = text => console.log(text);

export const tryParseNumber = (value) => {
  const num = Number(value);
  return !isNaN(num) && value.trim() !== '' ? num : value;
};
