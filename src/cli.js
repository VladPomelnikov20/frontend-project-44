import readlineSync from 'readline-sync';

const getUserName = () => {
	return readlineSync.question('May I have your name?');
}

export const greetUser = () => {
	const userName = getUserName()
	return `Hello, ${userName}!`
}
