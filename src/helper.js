export const getRandomInt = (limit = 10) => {
  let num
  do {
    num = Math.floor(Math.random() * limit)
  } while (num === 0)
  return num
}

export const getRandomObjValue = (obj) => {
  const keys = Object.keys(obj)
  if (keys.length === 0) return undefined
  const randomIndex = Math.floor(Math.random() * keys.length)
  return obj[keys[randomIndex]]
}

export const showText = text => console.log(text)

export const tryParseNumber = (value) => {
  const num = Number(value)
  return !isNaN(num) && value.trim() !== '' ? num : value
}
