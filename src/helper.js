export const getRandomInt = () => {
  return Math.floor(Math.random() * 100);
};

export const showText = text => console.log(text);

export const tryParseNumber = (value) => {
  const num = Number(value);
  return !isNaN(num) && value.trim() !== '' ? num : value;
};
