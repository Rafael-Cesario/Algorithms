// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings 'operations', where 'operations[i]' is the 'iTh' operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

const baseballGame = (operations) => {
	const score = [];
	let scoreTotal = 0;

	for (let x of operations) {
		if (x.match(/[0-9]/) !== null) {
			scoreTotal += Number(x);
			score.push(x);
		}

		if (x === '+') {
			const v1 = Number(score[score.length - 1]);
			const v2 = Number(score[score.length - 2]);
			const sum = v1 + v2;

			scoreTotal += sum;
			score.push(sum);
		}

		if (x === 'D') {
			const last = Number(score[score.length - 1]);
			const sum = last * 2;

			scoreTotal += sum;
			score.push(sum);
		}

		if (x === 'C') scoreTotal -= score.pop();
	}

	return scoreTotal;
};

console.log(baseballGame(['5', '2', 'C', 'D', '+'])); // 30
console.log(baseballGame(['5', '-2', '4', 'C', 'D', '9', '+', '+'])); // 27
console.log(baseballGame(['1', 'C'])); // 0
