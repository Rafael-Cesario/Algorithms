var carFleet = function (target, position, speed) {
	const sortedCars = position.map((position, index) => [position, speed[index]]).sort(([a], [b]) => b - a);

	const times = [];

	for (car of sortedCars) {
		const [position, speed] = car;
		const time = (target - position) / speed;

		times.push(time);
		if (times[times.length - 1] <= times[times.length - 2]) times.pop();
	}

	return times.length;
};
