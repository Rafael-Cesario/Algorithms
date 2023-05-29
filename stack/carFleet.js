var carFleet = function (target, position, speed) {
	const times = [];
	let answer = position.length;

	const sortedPositions = position.map((position, index) => [position, speed[index]]).sort(([a], [b]) => a - b);

	for (car in sortedPositions) {
		const currentCar = sortedPositions[car];
		const [position, speed] = currentCar;
		const timeTillDestination = (target - position) / speed;

		let isFasterThenPreviousCar = timeTillDestination >= times[times.length - 1];

		while (times.length && isFasterThenPreviousCar) {
			answer--;
			times.pop();
			isFasterThenPreviousCar = timeTillDestination >= times[times.length - 1];
		}

		times.push(timeTillDestination);
	}

	return answer;
};
