function guessingGame() {
	const ANSWER = Math.floor(Math.random() * 100);
	let isOver = false;
	let numGuesses = 0;

	console.log("Answer:", ANSWER);

	return function guess(num) {
		if (isOver) return "The game is over, you already won!";
		numGuesses++;
		if (num === ANSWER) {
			isOver = true;
			const guess = numGuesses === 1 ? "guess" : "guesses";
			return `You win! You found ${num} in ${numGuesses} ${guess}.`;
		}
		if (num < ANSWER) return `${num} is too low!`;
		if (num > ANSWER) return `${num} is too high!`;
	};
}

let game = guessingGame();

for (let i = 0; i < 100; i++) {
	console.log(game(i));
}

module.exports = { guessingGame };
